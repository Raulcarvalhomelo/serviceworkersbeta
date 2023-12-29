interface ButtonLoginProps {
  name?: string
}
export default function ButtonLoginProps(props: ButtonLoginProps) {
  return(
      <button className="gap-2 p-2 m-1 bg-primary rounded text-white">{props.name}</button>
    )
}
