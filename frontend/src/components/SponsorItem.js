const SponsorItem = ({image}) => {
  return (
    <div className="py-8 bg-lightergray">
      <div className="container px-4 mx-auto">
        <div className="flex flex-wrap items-center justify-center">
            <img src={image} className={"w-[25rem] h-[10rem]"} alt="sponsor_logo"></img>
        </div>
      </div>
  </div>
  )
}
export default SponsorItem