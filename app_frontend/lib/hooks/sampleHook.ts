/**
 * This is a sample hook for demonstration purposes.
 * You can delete this file and create your own hooks.
 * 
 * Hooks are used to fetch data from the API and provide it to the components.
 * 
 * Example:
 * 
 * import { useState, useEffect } from "react";
 * import apiClient from "../api/client";
 * 
 * export const useExample = () => {
 *   const [data, setData] = useState<any>(null);
 *   const [loading, setLoading] = useState(true);
 *   const [error, setError] = useState<Error | null>(null);
 * 
 *   useEffect(() => {
 *     const fetchData = async () => {
 *       try {
 *         const response = await apiClient.get("/api/example");
 *         setData(response.data);
 *       } catch (error) {
 *         setError(error as Error);
 *       } finally {
 *         setLoading(false);
 *       }
 *     };
 *     fetchData();
 *   }, []);
 * 
 *   return { data, loading, error };
 * };
 */