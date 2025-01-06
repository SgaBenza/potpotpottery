export interface SinglePotProps {
  id: string
}

export const SinglePot = ({ id }: SinglePotProps) => {
  return (
    <div className="text-center mb-24">
        <h1>
            Product {id}
        </h1>
      <div>SinglePot</div>
      <div className="text-stone">Potteries by Leonardo Romano</div>
    </div>
  )
}
