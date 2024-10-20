import { Autocomplete } from "@nextui-org/autocomplete";
import { Input } from "@nextui-org/input";

export default function AddLearningGoal() {
  return (
    <>
      <h3>Leerdoel</h3>
      <div className="flex flex-row gap-8 justify-between wrap">
        <Autocomplete label="Actie">
          {/* {themes.map((theme, index) => (
            <AutocompleteItem
              key={`${index}-${theme.value}`}
              value={theme.value}
            >
              {theme.label}
            </AutocompleteItem>
          ))} */}
        </Autocomplete>
        <Autocomplete label="Aandachtspunt">
          {/* {themes.map((theme, index) => (
          <AutocompleteItem key={`${index}-${theme.value}`} value={theme.value}>
            {theme.label}
          </AutocompleteItem>
        ))} */}
        </Autocomplete>
      </div>
      <Input className="flex basis-1/3" label="Beschrijving" />
    </>
  );
}
