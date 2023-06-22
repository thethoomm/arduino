
interface props {
  type: string
}

export default function Input({type}: props) {
  return (
    <div className="flex flex-col w-16">
      <label>{ type }</label>
      <input type="number" 
      className='w-16 h-8 pl-6 bg-slate-200 border-2 border-zinc-800 rounded-sm'
      value={0}/>
    </div>
  )
}
