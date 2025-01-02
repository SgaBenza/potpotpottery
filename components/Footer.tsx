export interface FooterProps {
  website: string
  instagram: string
  facebook: string
}
export const Footer = ({ website, instagram, facebook }: FooterProps) => {
  return (
    <footer className="flex justify-between m-4">
      <a href={website} target="_blank">
        PotPotPottery
      </a>
      <div className="text-stone flex gap-5">
        <a href={instagram} target="_blank">
          Instagram
        </a>
        <a href={facebook} target="_blank">
          Facebook
        </a>
      </div>
    </footer>
  )
}
