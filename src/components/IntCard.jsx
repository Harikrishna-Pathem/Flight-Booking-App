import { Card, Image, CardBody, CardFooter, Button } from "@chakra-ui/react";
import styles from "./IntCard.module.css";
import ReactCountryFlag from "react-country-flag";

function IntCard({ country }) {
  return (
    <>
      <div className={`col mb-4 ${styles.card}`}>
        <Card>
          <CardBody py={3}>
            <div className="row">
              <div className="col-2">
                <ReactCountryFlag
                  countryCode={country.contcode}
                  svg
                  style={{ width: "35px", height: "20px" }}
                  title={country.contcode}
                />
              </div>
              <div className="col-6">
                <h6 className={styles.country}>{country.cont}</h6>
              </div>
              <div className="col-4">
              <h6 className={`text-right ${styles.price}`}>
                    <a href="" className="stretched-link">&#8377; {country.price}</a>
                </h6>
              </div>
            </div>
          </CardBody>
        </Card>
      </div>
    </>
  );
}

export default IntCard;
