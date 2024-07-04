import "./styles.css";
import { useState, useEffect } from "react";
import {
  FaArrowAltCircleDown,
  FaArrowAltCircleUp,
  FaEdit,
  FaDelete
} from "react-icons/fa";
import { BiMessageSquareAdd } from "react-icons/bi";
import { TiArrowRepeatOutline } from "react-icons/ti";
import { MdDelete } from "react-icons/md";
export default function App() {
  const [disp, setDisp] = useState(false);
  const [disp1, setDisp1] = useState(false);
  const [disp2, setDisp2] = useState(false);
  const [disp3, setDisp3] = useState(false);
  const [disp4, setDisp4] = useState(false);
  const [disp5, setDisp5] = useState(false);
  const [disp6, setDisp6] = useState(false);
  const [disp7, setDisp7] = useState(false);

  const [fact, setFact] = useState("");

  const [rid, setRid] = useState("");
  const [ridans, setRidans] = useState("");
  const [ans, setAns] = useState(false);

  const [joke, setJoke] = useState("");

  const [trivia, setTrivia] = useState("");
  const [triviaans, setTriviaans] = useState("");
  const [ans1, setAns1] = useState(false);

  function frun() {
    setAns(!ans);
  }

  function frun1() {
    setAns1(!ans1);
  }

  useEffect(() => {
    mainfun("Facts");
    mainfun("Riddle");
    mainfun("Joke");
    mainfun("Trivia");
  }, []);

  const mainfun = (name) => {
    let url = ``;
    switch (name) {
      case "Facts": {
        url = `https://api.api-ninjas.com/v1/facts?limit=1`;
        break;
      }
      case "Riddle": {
        url = `https://api.api-ninjas.com/v1/riddles`;
        break;
      }
      case "Joke": {
        url = `https://api.api-ninjas.com/v1/jokes?limit=1`;
        break;
      }
      case "Trivia": {
        url = `https://api.api-ninjas.com/v1/trivia?category=`;
        break;
      }
      default: {
      }
    }
    fetch(url, {
      method: "GET",
      headers: {
        "X-Api-Key": "OuXKdSJfo4MAQhrfAzy0Vw==cQijIpnxnJxibm0A",
        "Content-type": "application/json;charset=UTF-8"
      }
    })
      .then((response) => response.json())
      .then((json) => {
        //console.log(json);
        //setFact(json[0].fact);
        //console.log(fact);
        if (name === "Facts") {
          setFact(json[0].fact);
        } else if (name === "Riddle") {
          setRid(json[0].question);
          setRidans(json[0].answer);
        } else if (name === "Joke") {
          setJoke(json[0].joke);
        } else if (name === "Trivia") {
          setTrivia(json[0].question);
          setTriviaans(json[0].answer);
        }
      })
      .catch((err) => console.log(err));
  };

  return (
    <div className="App">
      <h1>Randome things</h1>

      <Sinlgle
        name="Riddle"
        setDisp={setDisp1}
        disp={disp1}
        mainfun={mainfun}
        data={rid}
        btn={true}
        frun={frun}
        ans={ans}
        dataans={ridans}
      />

      <Sinlgle
        name="Joke"
        setDisp={setDisp}
        disp={disp}
        mainfun={mainfun}
        data={joke}
      />

      <Sinlgle
        name="Trivia"
        setDisp={setDisp3}
        disp={disp3}
        mainfun={mainfun}
        data={trivia}
        btn={true}
        frun={frun1}
        ans={ans1}
        dataans={triviaans}
      />

      <Sinlgle
        name="Facts"
        setDisp={setDisp2}
        disp={disp2}
        mainfun={mainfun}
        data={fact}
      />

      <Password setDisp4={setDisp4} disp4={disp4} />
      <Flames setDisp4={setDisp5} disp4={disp5} />
      <Circket setDisp6={setDisp6} disp6={disp6} />
      <Rkpprssr setDisp7={setDisp7} disp7={disp7} />
    </div>
  );
}

function Sinlgle(prams) {
  const mountedStyle = {
    animation: "inAnimation 250ms ease-in",
    animationFillMode: "backwards"
  };
  const unmountedStyle = {
    animation: "outAnimation 270ms ease-out",
    animationFillMode: "forwards"
  };
  return (
    <div>
      <div className="test">
        {" "}
        <h3>{prams.name}!</h3>
        <button
          className=""
          name="joke"
          onClick={() => {
            prams.setDisp(!prams.disp);
          }}
        >
          {prams.name}
          {!prams.disp && (
            <i>
              <FaArrowAltCircleDown />
            </i>
          )}
          {prams.disp && (
            <i>
              <FaArrowAltCircleUp />
            </i>
          )}
        </button>
      </div>
      {prams.disp && (
        <div className="sub" style={prams.disp ? mountedStyle : unmountedStyle}>
          <button
            name={prams.name}
            title="click on the button for randome facts"
            onClick={(e) => prams.mainfun(e.target.name)}
          >
            Next {prams.name}
          </button>
          <p>{prams.data}</p>

          {prams.btn && <button onClick={prams.frun}>ans</button>}
          {prams.ans && <p>{prams.dataans}</p>}
        </div>
      )}
    </div>
  );
}

function Password(params) {
  const mountedStyle = {
    animation: "inAnimation 250ms ease-in",
    animationFillMode: "backwards"
  };
  const unmountedStyle = {
    animation: "outAnimation 270ms ease-out",
    animationFillMode: "forwards"
  };
  let [pass, setPass] = useState([
    { id: 1, link: "gmail", password: "dfsfdf", edit: true, leng: 5 },
    { id: 2, link: "linkedin", password: "dfsfdf", edit: true, leng: 5 },
    { id: 3, link: "google", password: "dfsfdf", edit: true, leng: 5 },
    { id: 4, link: "mobile", password: "dfsfdf", edit: true, leng: 5 },
    { id: 5, link: "laptop", password: "dfsfdf", edit: true, leng: 5 }
  ]);
  let [count, setcount] = useState(6);

  function randpass(id, n) {
    if (n < 5) {
      n = 5;
      let dat = pass.map((i) => {
        if (i.id === id) console.log("h0oo" + id);
        return i.id === id ? { ...i, leng: 5 } : { ...i };
      });
      console.log(dat);
      setPass(dat);
      console.log(pass);
    }
    var passed = "";
    var str =
      "ABCDEFGHIJKLMNOPQRSTUVWXYZ" + "abcdefghijklmnopqrstuvwxyz0123456789@#$";

    for (let i = 1; i <= n; i++) {
      var char = Math.floor(Math.random() * str.length + 1);

      passed += str.charAt(char);
    }
    //console.log(passed);
    let mapp = pass.map((task) => {
      return task.id === id ? { ...task, password: passed } : { ...task };
    });
    setPass(mapp);
  }
  function edit(id) {
    let mapp = pass.map((task) => {
      return task.id === id ? { ...task, edit: !task.edit } : { ...task };
    });
    setPass(mapp);
  }
  function del(e) {
    setPass((oldValues) => {
      return oldValues.filter((_, i) => i !== e);
    });
  }
  function add() {
    setPass([
      ...pass,
      { id: count, link: "", password: "", edit: false, leng: 5 }
    ]);
    setcount(count++);
  }
  function cnglnk(e, id) {
    let mapped = pass.map((task) => {
      return task.id === id ? { ...task, link: e.target.value } : { ...task };
    });
    setPass(mapped);
  }
  function cngpas(e, id) {
    let mapped = pass.map((task) => {
      return task.id === id
        ? { ...task, password: e.target.value }
        : { ...task };
    });
    setPass(mapped);
  }
  function cnglen(e, id) {
    let mapped = pass.map((task) => {
      return task.id === id ? { ...task, leng: e.target.value } : { ...task };
    });
    setPass(mapped);
  }
  return (
    <div>
      <div className="test">
        <h3>Password!</h3>

        <button
          onClick={() => {
            params.setDisp4(!params.disp4);
          }}
        >
          Press
          {!params.disp4 && (
            <i>
              <FaArrowAltCircleDown />
            </i>
          )}
          {params.disp4 && (
            <i>
              <FaArrowAltCircleUp />
            </i>
          )}
        </button>
      </div>
      {params.disp4 && (
        <div
          className="sub"
          style={params.disp4 ? mountedStyle : unmountedStyle}
        >
          <button onClick={(e) => add()}>Add</button>
          <table className="pass">
            <tr>
              <th>Link</th>
              <th>Password</th>
              <th>Size(password) & Btn</th>
            </tr>

            {pass.map((data, i) => {
              return (
                <tr>
                  <td key={i}>
                    <input
                      className="mobvie"
                      type="text"
                      title={data.link}
                      value={data.link}
                      disabled={data.edit}
                      onChange={(e) => cnglnk(e, data.id)}
                    />
                  </td>
                  <td key={i}>
                    <input
                      type="text"
                      className="mobvie"
                      title={data.password}
                      value={data.password}
                      disabled={data.edit}
                      onChange={(e) => cngpas(e, data.id)}
                    />
                  </td>
                  <td>
                    <i>
                      <input
                        type="number"
                        title="Enter the length of password more then 5"
                        value={data.leng}
                        onChange={(e) => cnglen(e, data.id)}
                        disabled={data.edit}
                        className={data.leng < 5 ? "red" : "nored"}
                      />
                    </i>

                    <i
                      title="Generate randome password"
                      onClick={(e) => randpass(data.id, data.leng)}
                    >
                      <TiArrowRepeatOutline className="icons" />
                    </i>
                    {data.edit && (
                      <i title="Edit" onClick={(e) => edit(data.id)}>
                        <FaEdit className="icons" />
                      </i>
                    )}
                    {!data.edit && (
                      <i title="Save" onClick={(e) => edit(data.id)}>
                        <BiMessageSquareAdd className="icons" />
                      </i>
                    )}
                    <i onClick={(e) => del(i)}>
                      <MdDelete className="icons" />
                    </i>
                  </td>
                </tr>
              );
            })}
          </table>
        </div>
      )}
    </div>
  );
}

function Flames(params) {
  const [name1, setname1] = useState("");
  const [name2, setname2] = useState("");
  const [out, setout] = useState("");
  function replaceAt(string, index, replace) {
    return string.substring(0, index) + replace + string.substring(index + 1);
  }
  function flams() {
    //var res=document.getElementById("output");
    var a = name1;
    var b = name2;
    if (a != "" && b != "") {
      for (let i = 0; i < a.length; i++) {
        for (let j = 0; j < b.length; j++) {
          if (a[i] == b[j]) {
            a = replaceAt(a, i, "*");
            b = replaceAt(b, j, "*");
          }
        }
      }
      var countLetters = 0;
      for (let i = 0; i < a.length; i++) {
        if (a[i] != "*") {
          countLetters++;
        }
      }
      for (let i = 0; i < b.length; i++) {
        if (b[i] != "*") {
          countLetters++;
        }
      }
      if (countLetters > 1) {
        var flames = "FLAMES";
        let c = 0;
        let l = 1;
        for (let i = 0; flames.length != 1; i++) {
          if (l == countLetters) {
            if (c >= flames.length) {
              c = 0;
            }
            flames = replaceAt(flames, c, "");
            l = 1;
          }
          if (c >= flames.length) {
            c = 0;
          }
          l++;
          c++;
        }

        switch (flames) {
          case "F":
            flames = "Friend";
            break;
          case "L":
            flames = "Love";
            break;
          case "A":
            flames = "Affection";
            break;
          case "M":
            flames = "Marriage";
            break;
          case "E":
            flames = "Enemies";
            break;
          case "S":
            flames = "Sibling";
            break;
          default:
        }
      }
      if (countLetters == 1) {
        flames = "Sibling";
      }
      if (countLetters == 0) {
        flames = "Its Same Name";
      }
      setout(name2 + " is Your " + flames);
    } else {
      setout("Please Enter Name");
    }
  }
  return (
    <div>
      <div className="test">
        <h3>Flames!</h3>
        <button
          onClick={() => {
            params.setDisp4(!params.disp4);
          }}
        >
          Press
          {!params.disp4 && (
            <i>
              <FaArrowAltCircleDown />
            </i>
          )}
          {params.disp4 && (
            <i>
              <FaArrowAltCircleUp />
            </i>
          )}
        </button>
      </div>
      {params.disp4 && (
        <div className="sub">
          <div className="names">
            <input
              type="text"
              placeholder="Enter your name"
              value={name1}
              onChange={(e) => setname1(e.target.value)}
            />
          </div>
          <div className="names">
            <input
              type="text"
              placeholder="Enter your crush name"
              value={name2}
              onChange={(e) => setname2(e.target.value)}
            />
          </div>
          <button className="namesbtn" onClick={flams}>
            Find
          </button>
          <p>{out}</p>
        </div>
      )}
    </div>
  );
}

function Circket(params) {
  const [winner, setwinner] = useState();
  const [score1, setscore1] = useState(0);
  const [score2, setscore2] = useState(0);
  const [selected, setselected] = useState(1);
  const [selected1, setselected1] = useState();
  const [msg, setmsg] = useState();
  const [player, setplayer] = useState([
    { batsman: 1, status: "notout" },
    { batsman: 2, status: "notout" }
  ]);
  const [currentplay, setcurrentplay] = useState(1);
  const [disp, setdisp] = useState(false);
  function play() {
    //setwinner();
    let second = Math.floor(Math.random() * (7 - 1) + 1);
    setselected1(second);
    if (currentplay == 1) {
      console.log(selected);
      console.log(selected1);
      if (selected == second) {
        //alert("out");
        let mapped = player.map((task) => {
          return task.batsman === 1 ? { ...task, status: "out" } : { ...task };
        });
        setplayer(mapped);
        setcurrentplay(2);
        setmsg("you(team red) are out");
        setdisp(true);
        //setselected();
        second = 0;
        setselected1();
      } else {
        setscore1(score1 + selected);
        //setselected(0);
      }
    } else if (currentplay === 2) {
      if (selected == second) {
        //alert("out");
        let mapped = player.map((task) => {
          return task.batsman === 2 ? { ...task, status: "out" } : { ...task };
        });
        setmsg("Opponent(team blue) is out");
        setdisp(true);
        setplayer(mapped);
        let win =
          score1 < score2
            ? "blue team is the winner"
            : "red team is the winner";
        if (score1 == score2) win = "it is a tie";
        setwinner(win);
        setscore1();
        setscore2();
        document.getElementById("win").innerHTML = win;
      } else {
        setscore2(score2 + second);
        setselected(0);
      }
    }
    if (player[0].status === "out" && player[1].status === "out") {
      console.log("hi");
      let win =
        score1 < score2 ? "red team is the winner" : "blue team is the winner";
      if (score1 == score2) win = "it is a tie";
      //setwinner(win);
      setscore1();
      setscore2();
      document.getElementById("win").innerHTML = win;
    }
  }
  return (
    <div>
      <div className="test">
        <h3>Cirkcet!</h3>
        <button
          onClick={() => {
            params.setDisp6(!params.disp6);
          }}
        >
          Press
          {!params.disp6 && (
            <i>
              <FaArrowAltCircleDown />
            </i>
          )}
          {params.disp6 && (
            <i>
              <FaArrowAltCircleUp />
            </i>
          )}
        </button>
      </div>
      {params.disp6 && (
        <div className="sub">
          <div id="win"></div>
          <div className="specialbtn">
            <button onClick={play} className="specialbtn">
              Play
            </button>
          </div>
          {disp && (
            <div className="floating">
              <div className="cls" onClick={(e) => setdisp(false)}>
                close
              </div>
              <p>{msg}</p>
            </div>
          )}
          <div className="user">
            <div className="topcls">
              <p>
                Player : <span style={{ color: "red" }}>you</span>
              </p>
            </div>
            <div className="runs">
              <i
                className={selected === 1 ? "selected" : ""}
                onClick={(e) => {
                  setselected(1);
                  setselected1();
                }}
              >
                1
              </i>
              <i
                className={selected === 2 ? "selected" : ""}
                onClick={(e) => {
                  setselected(2);
                  setselected1();
                }}
              >
                2
              </i>
              <i
                className={selected === 3 ? "selected" : ""}
                onClick={(e) => {
                  setselected(3);
                  setselected1();
                }}
              >
                3
              </i>
              <i
                className={selected === 4 ? "selected" : ""}
                onClick={(e) => {
                  setselected(4);
                  setselected1();
                }}
              >
                4
              </i>
              <i
                className={selected === 5 ? "selected" : ""}
                onClick={(e) => {
                  setselected(5);
                  setselected1();
                }}
              >
                5
              </i>
              <i
                className={selected === 6 ? "selected" : ""}
                onClick={(e) => {
                  setselected(6);
                  setselected1();
                }}
              >
                6
              </i>
            </div>
            <div className="botcls">
              <p>score : {score1}</p>
            </div>
          </div>
          <div style={{ borderColor: "blue" }} className="user">
            <div className="topcls">
              <p>
                Player : <span style={{ color: "blue" }}>opponent</span>
              </p>
            </div>
            <div className="runs">
              <i>{selected1}</i>
            </div>
            <div className="botcls">
              <p>score : {score2}</p>
            </div>
          </div>
          <div
            onClick={(e) => {
              setwinner();
            }}
          >
            clear
          </div>
        </div>
      )}
    </div>
  );
}

function Rkpprssr(params) {
  const [select, setSelect] = useState();
  const [select1, setSelect1] = useState("Rock");
  const [user, setUser] = useState(0);
  const [user1, setUser1] = useState(0);
  const [winner, setWinner] = useState();
  function ply() {
    setSelect1();
    let array = ["Rock", "Paper", "Scissors"];
    const randomElement = array[Math.floor(Math.random() * array.length)];
    setSelect1(randomElement);
    if (select === "Rock" && select1 === "paper") {
      setUser1(user1 + 1);
      setWinner(1);
    } else if (select === "Rock" && select1 === "Scissors") {
      setUser(user + 1);
      setWinner(0);
    } else if (select === "Paper" && select1 === "Scissors") {
      setUser1(user1 + 1);
      setWinner(1);
    } else if (select === "Paper" && select1 === "Rock") {
      setUser(user + 1);
      setWinner(0);
    } else if (select === "Scissors" && select1 === "Rock") {
      setUser1(user1 + 1);
      setWinner(1);
    } else if (select === "Scissors" && select1 === "Paper") {
      setUser(user + 1);
      setWinner(0);
    } else if (select === select1) {
      setWinner(2);
    }
  }
  return (
    <div>
      <div className="test">
        <h3>Rock Paper Scissors!</h3>
        <button
          onClick={() => {
            params.setDisp7(!params.disp7);
          }}
        >
          Press
          {!params.disp7 && (
            <i>
              <FaArrowAltCircleDown />
            </i>
          )}
          {params.disp7 && (
            <i>
              <FaArrowAltCircleUp />
            </i>
          )}
        </button>
      </div>
      {params.disp7 && (
        <div className="sub">
          <div className="specialbtn">
            <button onClick={ply}>play</button>
          </div>
          <div className="user">
            <div className="topcls">
              <p>
                Wins : <span style={{ color: "red" }}>{user}</span>
              </p>
            </div>
            <div className="runs">
              <i
                className={select === "Rock" ? "selected" : ""}
                onClick={(e) => setSelect("Rock")}
              >
                Rock
              </i>
              <i
                className={select === "Paper" ? "selected" : ""}
                onClick={(e) => setSelect("Paper")}
              >
                Paper
              </i>
              <i
                className={select === "Scissors" ? "selected" : ""}
                onClick={(e) => setSelect("Scissors")}
              >
                Scissors
              </i>
            </div>
            {winner === 0 && (
              <div className="botcls">
                {" "}
                <p>Red team has won</p>
              </div>
            )}
            {winner === 2 && (
              <div className="botcls">
                {" "}
                <p>It is a tie</p>
              </div>
            )}
          </div>
          <div className="user" style={{ borderColor: "blue" }}>
            <div className="topcls">
              <p>
                Wins : <span style={{ color: "blue" }}>{user1}</span>
              </p>
            </div>
            <div>
              <i
                style={{
                  border: "1px solid blue",
                  borderRadius: "50px",
                  color: "white"
                }}
              >
                {select1}
              </i>
            </div>
            {winner === 1 && (
              <div className="botcls">
                {" "}
                <p>Blue team has won</p>
              </div>
            )}
            {winner === 2 && (
              <div className="botcls">
                {" "}
                <p>It is a tie</p>
              </div>
            )}
          </div>
          <div
            onClick={(e) => {
              setUser(0);
              setUser1(0);
              setWinner();
              setSelect1("Rock");
              setSelect("Rock");
            }}
          >
            Clear
          </div>
        </div>
      )}
    </div>
  );
}
