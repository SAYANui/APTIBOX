import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet"

export function SheetDemo({ asChild, children, ...props }) {
  return (
    <Sheet>
      <SheetTrigger asChild>
        {asChild ? children : <Button variant={props.variant} className={props.buttonStyle}>{props.text}</Button>}
      </SheetTrigger>
      <SheetContent>
        <SheetHeader>
          <SheetTitle>{props.title}</SheetTitle>
          <SheetDescription>
            {props.description}
          </SheetDescription>
        </SheetHeader>
        <div className="grid flex-1 auto-rows-min gap-6 px-4">
          {props.labelsAndInputs.map((item) => (
            <div key={item.label} className="grid gap-3">
              <Label htmlFor={item.label}>{item.label}</Label>
              <Input className={`selection:bg-[#328aff] selection:text-white`} id={item.label} type={item.type} placeholder={`Enter ${item.label.toLowerCase()}`} defaultValue={item.defaultValue} />
            </div>
          ))}
        </div>
        <SheetFooter>
          <Button type="submit" className="bg-[#328aff] hover:bg-[#1e9aff] text-white">{props.submitText}</Button>
          <SheetClose asChild>
            <Button variant="outline">{props.closeText}</Button>
          </SheetClose>
        </SheetFooter>
      </SheetContent>
    </Sheet>
  )
}
