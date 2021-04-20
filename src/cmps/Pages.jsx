import { Page } from "./Page"


export const Pages = ({ pages }) => {
  return (
    <div className="pages">
      {pages.map(({ name, imgName }) => <Page key={imgName} name={name} imgName={imgName} ></Page>)}
    </div>
  )
}
