
import Fieldset from "@/components/Fieldset"
import Button from "@/components/Button"

export default function Home() {
  return (
    <div>
      <div className="h-screen bg-blue-300">
        <div className="flex flex-row w-96 gap-16 justify-between">
          <div className="flex flex-col justify-between h-96">
            <Fieldset title="pH"/>
            <Fieldset title="Temperatura"/>
            <Fieldset title="ORP"/>
          </div>
          <div className="flex flex-col justify-between h-96">
            <Fieldset title="Oxigênio Dissolvido"/>
            <Fieldset title="Condutividade"/>
            <Fieldset title="Salinidade"/>
          </div>
        </div>
        <Button label="Enviar"/>
      </div>
      <div>
        {/* graficos */}
      </div>
    </div>
  )
}
