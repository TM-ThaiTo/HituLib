import OpacSearchBar from './opac-search-bar';
import OpacSearchSelectSuggest from './opac-search-select-suggest';

interface OpacSearchBarSelectProps {
  filters: any;
  q: any;
}

export default function OpacSearchBarSelect({ filters, q }: OpacSearchBarSelectProps) {
  return (
    <div className="sticky top-4">
      <OpacSearchBar filters={filters} q={q} />
      <div className="mt-4">
        <OpacSearchSelectSuggest />
      </div>
    </div>
  );
}
