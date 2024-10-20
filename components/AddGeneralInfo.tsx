import { Autocomplete } from "@nextui-org/autocomplete";
import { Input } from "@nextui-org/input";

export default function AddGeneralInformation() {
  const themes: { label: string; value: string }[] = [
    { label: "Ridders en kastelen", value: "riddersenkastelen" },
    { label: "Heelal", value: "heelal" },
    { label: "vakantie", value: "vakantie" },
  ];
  const celebrations = [
    { label: "Start van het schooljaar", value: "startvanhetschooljaar" },
    { label: "kinderboekenweek", value: "kinderboekenweek" },
    { label: "St. Michael", value: "stmichael" },
  ];

  return (
    <>
      <h3>Extra informatie</h3>
      <div className="flex flex-row gap-8 justify-between">
        <Input label="Minimum leeftijd" type="number" />
        <Input label="Maximum leeftijd" type="number" />
      </div>
      <Input label="Duur (minuten)" type="number" />
      <div className="flex flex-row gap-8 justify-between">
        <Autocomplete defaultItems={themes} items={themes} label="Thema">
          {/* {themes.map((theme, index) => (
          <AutocompleteItem key={`${index}-${theme.value}`} value={theme.value}>
            {theme.label}
          </AutocompleteItem>
        ))} */}
        </Autocomplete>
        <Autocomplete
          defaultItems={celebrations}
          items={celebrations}
          label="Evenement of Jaarfeest"
        >
          {/* {themes.map((theme, index) => (
          <AutocompleteItem key={`${index}-${theme.value}`} value={theme.value}>
            {theme.label}
          </AutocompleteItem>
        ))} */}
        </Autocomplete>
      </div>
      <Input label="Materiaal" />
    </>
  );
}
