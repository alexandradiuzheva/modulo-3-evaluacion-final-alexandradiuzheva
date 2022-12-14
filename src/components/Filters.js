import FilterByName from './FilterByName';
import FilterByHouse from './FilterByHouse';
import FilterByGender from './FilterByGender';
import FilterByAN from './FilterByAN';

function Filters(props) {
  const handleForm = (ev) => {
    ev.preventDefault();
  };

  return (
    <form className="filterForm" onSubmit={handleForm}>
      <FilterByName
        handleFilter={props.handleFilter}
        filterByName={props.filterByName}
      />
      <FilterByHouse
        handleFilter={props.handleFilter}
        filterByHouse={props.filterByHouse}
      />
      <FilterByGender
        handleFilter={props.handleFilter}
        filterByGender={props.filterByGender}
      />
      <FilterByAN
        handleFilter={props.handleFilter}
        filterByAN={props.filterByAN}
      />
    </form>
  );
}
export default Filters;
