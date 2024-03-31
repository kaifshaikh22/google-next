import Link from "next/link";
import Parser from "html-react-parser";


export default function WebSearchResults({ results }) {
  return (
    <div className="w-full mx-auto px-3 pb-24 sm:pl-[5%] md:pl-[14%] lg:pl-52">
        <p className="text-gray-600 text-sm mb-5 mt-3">
            About {results.searchInformation?.formattedTotalResults} results (
                {results.searchInformation?.formattedSearchTime} seconds)
            
        </p>
        {results.items?.map((results) => (
            <div className="mb-8 max-w-xl" key={results.link}>
                <div className="group flex flex-col">
                    <Link href={results.link}>
                    {results.formattedUrl}
                    </Link>
                    <Link href={results.link} className="group-hover:underline decoration-blue-800 text-xl truncate
                    font-medium text-blue-800 ">
                    {results.title}
                    </Link>
                </div>
                <p className="text-gray-600">{Parser(results.htmlSnippet)}</p>

            </div>

        ))}
    </div>
  );
}
