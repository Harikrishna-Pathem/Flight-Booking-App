import { Card, Image, CardBody, CardFooter, Button } from "@chakra-ui/react";
import styles from "./CityCard.module.css"

function CityCard({ city }) {
  return <>
      <div className={`col-2 ${styles.card} pb-3`}>
      <Card  overflow='hidden' shadow="lg">
        <CardBody  p={0}>
          <Image
            objectFit="cover"
            maxH={{ base: "100%" }}
            src={city.pic}
            alt={city.name}
            borderRadius={5}
            width={232} height={200}
          />
        </CardBody>
        <CardFooter p={5} pb={0}>
          <div className="row w-100 justify-content-between">
            <div className="col-8 p-0">
                <h6 className={styles.city}>{city.city}</h6>
                <p className={styles.state}>{city.state}</p>
            </div>
            <div className="col-4 p-0">
                <h6 className={`text-right ${styles.price}`}>
                    <a href="" className="stretched-link">&#8377; {city.price}</a>
                </h6>
                <p className={styles.st}>Starts at</p>
            </div>
          </div>
        </CardFooter>
      </Card>
      </div>
    </>

}

export default CityCard;
