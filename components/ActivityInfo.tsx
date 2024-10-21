import { ActivityInfo } from "@/app/api/activities/ActivityTypes";
import { Card, CardBody } from "@nextui-org/card";

function AgeGroupText({ minAge, maxAge }: ActivityInfo) {
  if (minAge && maxAge)
    return (
      <>
        {minAge}-{maxAge} jaar
      </>
    );
  if (minAge) return <>vanaf {minAge} jaar</>;
  if (maxAge) return <>t/m {maxAge} jaar </>;

  return <></>;
}

function AgeCard(info: ActivityInfo) {
  return (
    <Card>
      <CardBody>
        Leeftijd: <AgeGroupText maxAge={info.maxAge} minAge={info.minAge} />
      </CardBody>
    </Card>
  );
}

function TimeCard(info: ActivityInfo) {
  return (
    <Card>
      <CardBody>Duur: {info.timeInMinutes} minuten</CardBody>
    </Card>
  );
}

function GeneralCard({ text }: { text: string }) {
  return (
    <Card>
      <CardBody>{text}</CardBody>
    </Card>
  );
}

export default function ActivityInfoCards({ info }: { info: ActivityInfo }) {
  return (
    <div className="flex flex-row gap-1.5">
      {info.minAge || info.maxAge ? AgeCard(info) : <></>}
      {info.timeInMinutes && TimeCard(info)}
      {info.theme &&
        info.theme.length > 0 &&
        info.theme.map((theme) => <GeneralCard key={theme} text={theme} />)}
      {info.celebration &&
        info.celebration.length > 0 &&
        info.celebration.map((celebration) => (
          <GeneralCard key={celebration} text={celebration} />
        ))}
    </div>
  );
}
