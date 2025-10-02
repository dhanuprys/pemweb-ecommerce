import { createContext, useContext, useState } from 'react';

const SearchContext = createContext();

export function SearchProvider({ children }) {
    const [searchQuery, setSearchQuery] = useState('');
    const [isSearchActive, setIsSearchActive] = useState(false);

    const updateSearchQuery = (query) => {
        setSearchQuery(query);
        setIsSearchActive(query.length > 0);
    };

    const clearSearch = () => {
        setSearchQuery('');
        setIsSearchActive(false);
    };

    return (
        <SearchContext.Provider value={{
            searchQuery,
            isSearchActive,
            updateSearchQuery,
            clearSearch
        }}>
            {children}
        </SearchContext.Provider>
    );
}

export function useSearch() {
    const context = useContext(SearchContext);
    if (!context) {
        throw new Error('useSearch must be used within a SearchProvider');
    }
    return context;
}
