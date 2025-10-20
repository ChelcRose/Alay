"use client"

import CampaignCard from "@/components/campaigns/campaigns-card";
import { Campaign } from "@/types/types";

type CampaignsListProps = {
    campaigns: Campaign[];
}

export default function CampaignList({ campaigns }: CampaignsListProps) {
  return (
    <ul className="mt-6 grid grid-cols-1 gap-6" role="list" aria-label="Campaigns List">
      {campaigns.length === 0 ? (
        <li role="listitem" className="text-sm text-gray-500">
            No campaigns found.
        </li>
      ) : (
        campaigns.map((c) => (
          <li key={c.id ?? c.title} role="listitem">
            <CampaignCard campaign={c} />
          </li>
        ))
      )}
    </ul>
  );
}