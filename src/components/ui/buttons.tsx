interface ButonsDashboard {
  name: string
  onClick?: () => void
}
export  function ButonsDashboard(props: ButonsDashboard) {
  return(
      <button className="gap-2 p-2 m-1 bg-primary rounded text-white">{props.name}</button>
    )
}
