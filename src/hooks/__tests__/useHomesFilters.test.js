import { renderHook, act } from "@testing-library/react-hooks";
import useHomesFilters from "../useHomesFilters";

const mockData = [
  {
    name: "first",
    custom: false,
  },
  {
    name: "second",
    custom: false,
  },
  {
    name: "third",
    custom: true,
  },
];

const mockFilter = { custom: true };

describe("useHomesFilters", () => {
  it("should return all data elements, if no filters are passed", () => {
    const { result } = renderHook(() => useHomesFilters(mockData));

    // expect hook to return all elements
    expect(result.current[0].length).toEqual(mockData.length);
  });

  it("should filter only third element after we pass appropriate filter", () => {
    const { result, rerender } = renderHook(() => useHomesFilters(mockData));

    // expect hook to return all elements
    expect(result.current[0].length).toEqual(mockData.length);

    // get setFilters function from hook
    const setFilters = result.current[1];

    // apply filters
    act(() => setFilters(mockFilter));
    rerender();

    // expect hook to return filtered result
    expect(result.current[0][0].name).toEqual(mockData[2].name);
    expect(result.current[0][0].custom).toEqual(mockData[2].custom);
  });

  it("should return again all elements after we add, and then remove filters", () => {
    const { result, rerender } = renderHook(() => useHomesFilters(mockData));

    // expect hook to return all elements
    expect(result.current[0].length).toEqual(mockData.length);

    // get setFilters function from hook
    const setFilters = result.current[1];

    // apply filters
    act(() => setFilters(mockFilter));
    rerender();

    // expect hook to return filtered result
    expect(result.current[0][0].name).toEqual(mockData[2].name);
    expect(result.current[0][0].custom).toEqual(mockData[2].custom);

    // apply filters
    act(() => setFilters({}));
    rerender();
    expect(result.current[0].length).toEqual(mockData.length);
  });
});
