'use client';

import { createContext, useContext, useState, ReactNode } from 'react';
import { MethodologySlug } from '@/types';

type FilterValue = MethodologySlug | 'all';

interface FilterContextType {
  activeFilter: FilterValue;
  setActiveFilter: (filter: FilterValue) => void;
}

const FilterContext = createContext<FilterContextType>({
  activeFilter: 'all',
  setActiveFilter: () => {},
});

export function FilterProvider({ children }: { children: ReactNode }) {
  const [activeFilter, setActiveFilter] = useState<FilterValue>('all');
  return (
    <FilterContext.Provider value={{ activeFilter, setActiveFilter }}>
      {children}
    </FilterContext.Provider>
  );
}

export function useFilter() {
  return useContext(FilterContext);
}
