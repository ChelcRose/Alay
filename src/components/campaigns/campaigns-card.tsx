import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Campaign, NeededItem } from "@/types/types"

export default function CampaignCard({ campaign }: { campaign: Campaign }) {
  return (
    <Card className="w-full">
      <CardHeader>
        <CardTitle className="text-lg font-semibold">
          {campaign.title}
        </CardTitle>
      </CardHeader>
      <CardContent>
        <p className="mb-2">{campaign.description}</p>
        <div>
          <h4 className="font-medium mb-1">Needed Items:</h4>
          <ul className="list-disc list-inside">
            {(campaign.neededItems ?? []).map((item, idx) => (
              <li key={item.id ?? `${item.name}-${idx}`}>
                {item.name} {item.quantity ? ` - ${item.quantity}` : ""}
              </li>
            ))}
          </ul>
        </div>
      </CardContent>
    </Card>
  )
}