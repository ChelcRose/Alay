import { Input } from "@/components/ui/input"
import { Search } from "lucide-react"

interface SearchBarProps {
    onSearch: (term: string) => void
}

export default function SearchBar({ onSearch }: SearchBarProps) {
    return (
        <div className="relative w-full">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />

            <Input
                type="search"
                placeholder="Search by title, organization, or item"
                onChange={(e) => onSearch(e.target.value.toLowerCase())}
                className="pl-9"
            />
        </div>
    )
}