"use client"

import { useEffect, useState } from "react";
import { Campaign } from "@/types/types";
import CampaignList from "@/components/campaigns/campaigns-list";
import SearchBar from "@/components/campaigns/search-bar"
import { mockCampaigns } from "@/constants/mock-data";

export default function CampaignsPage() {
    const [campaigns, setCampaigns] = useState<Campaign[]>([])
    const [filteredCampaigns, setFilteredCampaigns] = useState<Campaign[]>([])
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
                setFilteredCampaigns(data)
            } catch (err: any) {
                console.warn("API unavailable — using mock data instead.");
                setCampaigns(mockCampaigns);
                setFilteredCampaigns(mockCampaigns)
            } finally {
                setLoading(false)
            }
        }

        fetchCampaigns()
        return () => controller.abort();

    }, [])

    const handleSearch = (term: string) => {
        if (!term) {
            setFilteredCampaigns(campaigns);
            return;
        }

        const filtered = campaigns.filter((c) => {
            const title = c.title?.toLowerCase() || ""
            const org = c.charityID?.toLowerCase() || ""
            const items = c.neededItems
                ?.map(item => item.name.toLowerCase())
                .join(" ") || ""

            return title.includes(term) || org.includes(term) || items.includes(term)
        })

        setFilteredCampaigns(filtered)
    }

    console.log("Loaded campaigns:", campaigns);

    return (
        <div className="mt-2">
            <div className="mb-8 space-y-2">
                <h1 className="font-bold text-violet-900 text-3xl">Browse Campaigns</h1>
                <p className="text-sm">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque a mollis ante, eget viverra neque. Praesent placerat, felis semper consectetur volutpat, nulla metus faucibus ligula, quis suscipit urna dolor eget lectus.</p>
            </div>
            <SearchBar onSearch={handleSearch} />
            {loading ? (
                <p className="mt-6">Loading campaigns...</p>
            ) : (
                <>
                    {campaigns.length === 0 ? (
                    <p className="mt-6">No campaigns found.</p>
                    ) : (
                    <div className="mt-6">
                        <CampaignList campaigns={filteredCampaigns} />
                    </div>
                    )}
                </>
            )}
        </div>
    )
}