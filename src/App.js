import { useDispatch, useSelector } from "react-redux";
import { Match } from "./components/match/Match";
import { addMatch, resetMatch } from "./rtk/match/matchSlice";

function App() {
  const matches = useSelector((state) => state.matches.nMatch);
  console.log(matches);
  const dispatch = useDispatch();
  return (
    <div>
      <section class="section">
        <header class="header">
          <div class="container">
            <div class="header-wrapper">
              <img src="./image/lws-logo 1.svg" alt="logo" class="logo" />
              <h1 class="name">Scoreboard</h1>
              <h5 class="total">Total</h5>
            </div>
          </div>
        </header>

        {matches.map((match) => {
          return <Match id={match.id} count={match.count} />;
        })}
        <div class="add_match">
          <button class="btn lws-addMatch" onClick={() => dispatch(addMatch())}>
            Add Another Match
          </button>
          <button class="lws-reset" onClick={() => dispatch(resetMatch())}>
            <svg
              fill="none"
              width="24"
              height="24"
              stroke="currentColor"
              stroke-width="2"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
              aria-hidden="true"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15"
              ></path>
            </svg>
            <span>Reset</span>
          </button>
        </div>
      </section>

      <section class="mask"></section>
    </div>
  );
}

export default App;
