import { useEffect, useState } from "react";
import { useGetQuotesMutation } from "../../redux/api/quotesApi";
import { TQuotes } from "../../types/app";

const Home = () => {
  const [getQuotes, { error, isLoading }] = useGetQuotesMutation();
  const [quotes, setQuotes] = useState<TQuotes[]>([]);

  useEffect(() => {
    const handleGetQuotes = async () => {
      try {
        const response = await getQuotes(undefined).unwrap();
        setQuotes(response?.quotes);
      } catch (err) {
        console.error(error);
      }
    };
    handleGetQuotes();
  }, []);

  if (isLoading) {
    return <div className="text-center  flex items-center justify-center h-screen ">Loading...</div>;
  }

  if (error) {
    return <div className="text-center text-red-500 flex items-center justify-center h-screen ">Failed to load quotes</div>;
  }

  return (
    <div className="flex flex-col items-center py-10">
      {quotes?.map((item) => (
        <div key={item.id} className="relative bg-gradient-to-r from-purple-500 to-indigo-500 shadow-lg rounded-xl p-8 mb-8 max-w-2xl w-full text-white transform transition-transform hover:scale-105 hover:shadow-2xl" >
          <svg className="absolute top-0 left-0 w-12 h-12 text-indigo-300 opacity-30" fill="currentColor" viewBox="0 0 24 24" >
            <path d="M7 7V3H3v4h4zm14-4h-4v4h4V3zM7 21v-4H3v4h4zm14-4h-4v4h4v-4z"></path>
          </svg>

          <blockquote className="text-2xl font-semibold italic mb-6">
            “{item.quote}”
          </blockquote>

          <address className="text-right text-base not-italic opacity-80">
            — {item.author}
          </address>

          <div className="absolute -bottom-4 right-4 bg-indigo-600 p-2 rounded-full">
            <svg className="w-6 h-6 text-wh
            
            ite" fill="none" stroke="currentColor" viewBox="0 0 24 24" >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
            </svg>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Home;
