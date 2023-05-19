export interface Props {
  title: string
  description: string
}

const Description = (props: Props) => {
  return (
    <>
      <h1 className="text-2xl font-bold">{props.title}</h1>
      <p className="mt-2">{props.description}</p>
    </>
  )
}
export default Description
