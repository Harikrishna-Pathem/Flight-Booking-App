import { Card, CardHeader, CardBody, CardFooter } from "@chakra-ui/react";
import styles from "./Ticket.module.css";
import { FaArrowLeftLong } from "react-icons/fa6";
import { FaArrowRightLong } from "react-icons/fa6";

function Ticket({ info, ticket }) {
  return (
    <>
      <div className="row justify-content-center p-2">
        <div className={`col-8 px-0 ${styles.card}`}>
          <Card align="center">
            <CardBody className="w-100" p={0}>
              <div className={`row justify-content-evenly pt-2 ${styles.ticket}`}>
                <div className="col-3 ">
                  <p>{info.dep}</p>
                  <h3>{ticket.start}</h3>
                  <p className="fw-bold fs-6">{info.from}</p>
                </div>
                <div className="col-3 text-center pt-2">
                  <h3>{ticket.flight}</h3>
                  <p className={styles.time}>
                    <FaArrowLeftLong /> {ticket.time} <FaArrowRightLong />
                  </p>
                  <p>non-stop</p>
                </div>
                <div className="col-3 text-end">
                  <p>
                    Passengers : {info.pas} | {info.eco}
                  </p>
                  <h3>{ticket.end}</h3>
                  <p className="fw-bold fs-6">{info.to}</p>
                </div>
                <div className={`col-2 p-0 text-center ${styles.pcard}`}>
                  <div className={styles.tcir}></div>
                  <p className={styles.total}>total :</p>
                  <h3 className={styles.price}>&#8377; {ticket.price}</h3>
                  <button className="btn btn-sm btn-info mb-3">Buy Now</button>
                  <div className={styles.bcir}></div>
                </div>
              </div>
            </CardBody>
          </Card>
        </div>
      </div>
    </>
  );
}

export default Ticket;
