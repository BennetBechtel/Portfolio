// TmuxBar.tsx
import Info from "./Info";
import Cmd from "../../../assets/cmd.png";
import Folder from "../../../assets/folder.png";
import Calendar from "../../../assets/calendar.png";
import Pane from "./Pane";
import { useLiveDate } from "../../../hooks/useLiveDate";

export default function () {
  const time = useLiveDate();
  let hour = time.getHours();
  let minute = time.getMinutes();

  let now = "";
  hour < 10 ? (now += "0" + hour.toString()) : (now += hour.toString());
  now += ":";
  minute < 10 ? (now += "0" + minute.toString()) : (now += minute.toString());

  return (
    <div className="flex h-8 w-full flex-row justify-between px-3 pt-[6px]">
      <section className="flex flex-row gap-3">
        <Info image={Cmd} text="Portfolio" color="#a6e3a1" />
        <Pane name="nvim" number={1} color="#fab387" />
        <Pane name="bash" number={2} color="#89b4fa" />
      </section>

      <section className="flex flex-row gap-5">
        <Info image={Folder} text="frontend" color="#f5c2e7" />
        <Info image={Calendar} text={now} color="#89b4fa" />
      </section>
    </div>
  );
}
