"use client"

import { useEffect, useState } from "react";
import { Campaign } from "@/types/types";
import CampaignList from "@/components/campaigns/campaigns-list";
import SearchBar from "@/components/campaigns/search-bar"

export default function CampaignsPage() {
    const [campaigns, setCampaigns] = useState<Campaign[]>([])
    const [loading, setLoading] = useState(false)
    const [error, setError] = useState<string | null>(null)

    useEffect(() => {
        const controller = new AbortController(); 
        const signal = controller.signal;

        async function fetchCampaigns() {
            setLoading(true)
            setError(null)
            try {
                const res = await fetch("/api/campaigns", { signal })
                
                if (!res.ok) throw new Error('Fetch failed: ${res.status}')

                const data: Campaign[] = await res.json()
                setCampaigns(data)
            } catch (err: any) {
                if (err?.name === 'AbortError') setError(err?.message ?? "Failed to load campaigns")
            } finally {
                setLoading(false)
            }
        }

        fetchCampaigns()

        return () => controller.abort();

    }, [])

    return (
        <div className="mt-20">
            <SearchBar />
            {loading ? (
                <p className="mt-6">Loading campaigns...</p>
            ) : error ? (
                <p className="mt-6 text-red-500">Error: {error}</p>
            ) : campaigns.length === 0 ? (
                <p className="mt-6">No campaigns found.</p>
            ) : (
                <div className="mt-6 grid grid-cols-1 gap-6">
                    {campaigns.map((c) => (
                        <CampaignList key={c.id ?? c.title} campaigns={[c]} />
                    ))}
                </div>
            )}
        </div>
    )
}