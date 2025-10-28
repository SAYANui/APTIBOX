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

export function SheetDemo(props) {
  return (
    <Sheet>
      <SheetTrigger asChild>
        <Button variant={props.variant} className={props.buttonStyle}>{props.text}</Button>
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
            <div className="grid gap-3">
              <Label htmlFor={item.label}>{item.label}</Label>
              <Input id={item.label} type={item.type} placeholder={`Enter ${item.label.toLowerCase()}`} defaultValue={item.defaultValue} />
            </div>
          ))}
        </div>
        <SheetFooter>
          <Button type="submit">{props.submitText}</Button>
          <SheetClose asChild>
            <Button variant="outline">{props.closeText}</Button>
          </SheetClose>
        </SheetFooter>
      </SheetContent>
    </Sheet>
  )
}
