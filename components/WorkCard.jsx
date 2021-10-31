import { Card, Image, Link, Text } from "@geist-ui/react";

const WorkCard = ({
  width,
  image,
  text,
  secondaryText,
  link,
  linkLabel,
  secondLink,
  secondLinkLabel,
  icon,
  secondIcon }) => {
  return (
    <Card hoverable
      width={width}
    // className="m-2"
    >
      <Image src={image}
        // height="100px" width="200px" 
        draggable={false} />
      <Text h4 mb={0}>{text}</Text>
      <Text type="secondary" small>{secondaryText}</Text>
      {link &&
        <Card.Footer>
          <Link rel="noopener noreferrer" className="link" block target="_blank" href={link}>{icon}{linkLabel}</Link>
          {secondLink && <Link rel="noopener noreferrer" className="link" block target="_blank" href={secondLink}>{secondIcon}{secondLinkLabel}</Link>}
        </Card.Footer>}
    </Card>
  )
}

export default WorkCard;