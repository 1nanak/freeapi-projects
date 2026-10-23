import {useState, useEffect, useCallback} from 'react'

export function useUser(page, limit =12) {
    const [user, setUser] = useState([])
    const [error, setError] = useState(null)
    const [loading, setLoading] = useState(false)
    const [totalpage, setTotalPage] = useState(1)
    const [totalItems, setTotalItems] = useState(0)

    const fetchUsers = useCallback(async () => {
    setLoading(true);
    setError(null);
      try {
        const response = await fetch(
          `https://api.freeapi.app/api/v1/public/randomusers?page=${page}&limit=${limit}`,
        );
        const json = await response.json();
        console.log(json.data);
        setUser(json.data.data);
        setTotalPage(json.data.totalPages);
        setTotalItems(json.data.totalItems);
        console.log(totalpage)
      } catch (error) {
        setError(error);
      } finally {
        setLoading(false);
      }
    },[page,limit]);

    useEffect(() => {
      fetchUsers();
    }, [fetchUsers]);

    return { user, error, loading,totalpage,totalItems ,fetch: fetchUsers };
}