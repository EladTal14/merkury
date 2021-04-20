import { VictoryPie } from "victory"

export function Sales() {
  return (
    <div className="sales">
      <h1>Sales</h1>
      <VictoryPie
        data={[
          { x: "March", y: 35 },
          { x: "April", y: 40 },
          { x: "May", y: 40 },
          { x: "June", y: 55 }
        ]}
      />
    </div>
  )
}
