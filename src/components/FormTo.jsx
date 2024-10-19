import { Card, CardHeader, CardBody, CardFooter } from "@chakra-ui/react";
import styles from "./FromTo.module.css";
import { useState } from "react";

function FromTo({ setSearch, onSearch }) {
  let [from, setFrom] = useState("Hyderabad");
  let [to, setTo] = useState("Banglore");
  let [vis, setVis] = useState("visible");

  function onSwap() {
    let tempfrom = from;
    setFrom(to);
    setTo(tempfrom);
  }

  function hideReturn(e) {
    if (e.target.id === "oneway" && e.target.checked) {
      setVis(true);
    } else if (e.target.id === "twoway" && e.target.checked) {
      setVis(false);
    }
  }

  function onClickSearch(e) {
    e.preventDefault()
    
    const fromVal = document.getElementById("from").value;
    const to = document.getElementById("to").value;
    const date = document.getElementById("date").value;
    const returndate = document.getElementById("returndate").value;
    const pass = document.getElementById("passengers").value;
    const tickclass = document.getElementById("class").value;

    console.log("Called");
    console.log(fromVal, to, date, pass, tickclass);

    if (fromVal != "" && to != "" && date != "" && pass != "" && tickclass != "") {
      console.log(from, to, date, pass, tickclass);
      setSearch("search");
      onSearch(fromVal, to, date, pass, tickclass);
    } else {
      alert("Please Fill Required data");
    }
  }

  return (
    <div className={styles.fromto}>
      <div className="container-lg">
        <Card align="center" shadow="md">
          <form onSubmit={(e) => onClickSearch(e)}>
            <CardBody>
              <div className={styles.toggle}>
                <div className="row justify-content-center">
                  <div class={`btn-group bg-light p-0 w-25 ${styles.tbtns}`}>
                    <input
                      type="radio"
                      class="btn-check"
                      name="options-outlined"
                      id="oneway"
                      defaultChecked
                      onChange={(e) => hideReturn(e)}
                    />
                    <label
                      class="btn btn-outline-primary fw-bold fs-6"
                      for="oneway"
                    >
                      One Way
                    </label>

                    <input
                      type="radio"
                      class="btn-check"
                      name="options-outlined"
                      id="twoway"
                      defaultChecked={false}
                      onChange={(e) => hideReturn(e)}
                    />
                    <label
                      class="btn btn-outline-primary fw-bold fs-6"
                      for="twoway"
                    >
                      Return
                    </label>
                  </div>
                </div>
              </div>
              <div class="row">
                <div class="col px-1 position-relative">
                  <label for="from" class="form-label">
                    From
                  </label>
                  <input
                    type="text"
                    class="form-control"
                    placeholder="from"
                    id="from"
                    defaultValue={from}
                    required
                  />
                </div>

                <div class="col px-1">
                  <label for="to" class="form-label">
                    To
                  </label>
                  <span className={styles.swap} onClick={() => onSwap()}>
                    {" "}
                    <i class="bi bi-arrow-left-right"></i>{" "}
                  </span>
                  <input
                    type="text"
                    class="form-control"
                    placeholder="to"
                    id="to"
                    defaultValue={to}
                    required
                  />
                </div>
                <div class="col-sm">
                  <label for="date" class="form-label">
                    Depart On
                  </label>
                  <input type="date" class="form-control" id="date" required />
                </div>
                <div class="col-sm " id="return">
                  <label for="returndate" class="form-label">
                    Return On
                  </label>
                  <input
                    type="date"
                    class="form-control"
                    id="returndate"
                    disabled={vis}
                  />
                </div>

                <div class="col-sm">
                  <label for="passengers" class="form-label">
                    Passengers
                  </label>
                  <select id="passengers" class="form-select" required>
                    <option value={1} selected>
                      1
                    </option>
                    <option value={2}>2</option>
                    <option value={3}>3</option>
                    <option value={4}>4</option>
                  </select>
                </div>
                <div class="col-md">
                  <label for="class" class="form-label">
                    Ticket Class
                  </label>
                  <select id="class" class="form-select" required>
                    <option value="Economy" selected>
                      Economy
                    </option>
                    <option value="Premium Economy">Premium Economy</option>
                    <option value="Bussiness class">Bussiness</option>
                    <option value="First Class">First Class</option>
                  </select>
                </div>
                <div class="col-sm mt-1">
                  <button
                    className="btn btn-primary w-100 mt-4"
                     >
                    Search
                  </button>
                </div>
              </div>
            </CardBody>
          </form>
        </Card>
      </div>
    </div>
  );
}

export default FromTo;
