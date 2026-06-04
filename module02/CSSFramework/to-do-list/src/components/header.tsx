import { Checkbox } from "@/components/ui/checkbox"
import { InputGroup, InputGroupAddon, InputGroupInput } from "./ui/input-group" // Adjust path if needed

export function Header() {
  return (
    <div className="relative h-75 bg-[url('/src/assets/header-bg.png')] bg-cover bg-center">
      <div className="absolute z-10 size-full bg-linear-to-bl from-[#5596FF]/60 to-[#AC2DEB]/60">
        <div className="z-20 container mx-auto h-full max-w-135.25">
          <div className="size-full flex flex-col justify-center gap-8">
            <h1 className="text-[40px] font-bold tracking-[15px] text-white">
              TODO
            </h1>
            <InputGroup className="h-16 items-center rounded-lg bg-white">
              <InputGroupAddon className="px-4">
                <Checkbox className="size-7 rounded-full" />
              </InputGroupAddon>
              <InputGroupInput
                className="p-0 pt-1 text-lg placeholder:text-lg placeholder:text-[#9495A5]"
                placeholder="Create a new todo..." 
              />
            </InputGroup>
          </div>
        </div>
      </div>
    </div>
  )
}