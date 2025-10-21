import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import Image from "next/image"
import { Icons } from "@/constants/icons"
import { Campaign } from "@/types/types"
import { ViewDetailsButton } from "@/components/campaigns/view-details-button"

export default function CampaignCard({ campaign }: { campaign: Campaign }) {
  return (
    <Card className="w-full shadow-sm border border-gray-200 rounded-xl hover:shadow-md transition-shadow duration-200 gap-0">
      <CardHeader className="flex flex-row items-start justify-between pb-3">
        <div>
          <CardTitle className="text-xl font-semibold leading-tight">
            {campaign.title || "Untitled Campaign"}
          </CardTitle>
          <p className="text-sm text-gray-500 mt-1">
            by <span className="font-medium text-gray-700">Organization Name</span> ·
            <span className="ml-1">Organization Location</span>
          </p>
        </div>
        <ViewDetailsButton href={`/charity/campaigns/${campaign.id}`} />
      </CardHeader>

      <CardContent className="space-y-4">
        <p className="text-gray-700 text-sm leading-relaxed">
          {campaign.description || "No description provided."}
        </p>

        {/* <div className="flex items-center gap-2 text-sm text-gray-500">
          <Image src={Icons.time} alt="Clock icon" width={16} height={16} />
          <span>
            {campaign.startDate
              ? `From ${new Date(campaign.startDate).toLocaleDateString()}`
              : "Start date not available"}{" "}
            {campaign.startDate
              ? `to ${new Date(campaign.endDate).toLocaleDateString()}`
              : ""}
          </span>
        </div> */}

        {/* <div className="flex items-center gap-2 text-sm text-gray-700 font-medium">
          <div className="flex items-center gap-1">
            <Image src={Icons.time} alt="Clock icon" width={16} height={16} />
            <span className="text-gray-600">
              {campaign.startDate
                ? `${new Date(campaign.startDate).toLocaleDateString()}`
                : "Start date not set"}
            </span>
          </div>
          <span className="text-gray-400">—</span>
          <span className="text-gray-600">
            {campaign.endDate
              ? new Date(campaign.endDate).toLocaleDateString()
              : "No end date"}
          </span>
        </div> */}

        <div className="inline-flex items-center gap-1 px-2 py-1 rounded-md bg-gray-100 text-gray-600 text-xs font-medium w-fit">
          <Image src={Icons.time} alt="Clock icon" width={14} height={14} />
          <span>
            {campaign.startDate
              ? `${new Date(campaign.startDate).toLocaleDateString("en-US", {
                  month: "short",
                  day: "numeric",
                  year: "numeric",
                })} → ${new Date(campaign.endDate).toLocaleDateString("en-US", {
                  month: "short",
                  day: "numeric",
                  year: "numeric",
                })}`
              : "Date not available"}
          </span>
        </div>

        {campaign.neededItems && campaign.neededItems.length > 0 ? (
          <div className="flex flex-wrap gap-2">
            {campaign.neededItems.map((item, idx) => (
              <span
                key={item.id ?? `${item.name}-${idx}`}
                className="inline-flex items-center px-3 py-1 text-xs font-medium rounded-full bg-violet-100 text-violet-700 border border-violet-200"
              >
                {item.name}
              </span>
            ))}
          </div>
        ) : (
          <p className="text-gray-500 text-sm italic">No items listed.</p>
        )}
      </CardContent>
    </Card>
  )
}
