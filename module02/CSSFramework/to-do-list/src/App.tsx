import * as CheckboxPrimitive from "@radix-ui/react-checkbox"
import { InputGroup, InputGroupAddon, InputGroupInput } from "./components/ui/input-group"
import { Checkbox } from "./components/ui/checkbox"
import { Header } from "./components/header"
import { Card, CardContent } from "./components/ui/card"
import { ScrollArea } from "./components/ui/scroll-area"
import { Fragment } from "react/jsx-runtime"
import { Item, ItemActions } from "./components/ui/item"
import ToDoListData from "./data/to-do-list.data"

export function App() {
  return <main>
    <Header />
    <div className="container mx-auto max-w-135.25 relative -top-8 z-30">
      <Card className="p-0">
        <CardContent className="h-72 p-0">
          <ScrollArea className="h-72">
            {ToDoListData.map((item) => (
              <Fragment key={item.id}>
                <Item>
                  <ItemActions>
                    <Checkbox checked={item.isDone} />
                  </ItemActions>
                </Item>
              </Fragment>
            ))}
          </ScrollArea>
        </CardContent>
      </Card>
    </div>
  </main>
}

export default App
