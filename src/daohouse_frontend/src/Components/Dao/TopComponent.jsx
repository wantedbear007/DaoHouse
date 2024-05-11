import React from 'react'
import daobg from "../../../assets/daobg.png";

const TopComponent = ({ showButtons, showAll, setShowAll }) => {
    const className = "DAOs";

    return (
        <div
            className={
                className +
                "__filter w-100 h-[25vh] p-20 flex flex-col items-start justify-center"
            }
            style={{
                backgroundImage: `url("${daobg}")`,
                backgroundRepeat: "no-repeat",
                backgroundSize: "cover",
                backgroundPosition: "center",
            }}
        >
            <h1 className="text-5xl p-3 text-white">DAOs</h1>

            {showButtons &&
                <div
                    className={
                        className + "__buttons flex flex-row border-t-2 border-white"
                    }
                >
                    <button
                        className={`px-6 py-2 text-lg text-white ${!showAll ? "" : "shadow-lg font-semibold"
                            }`}
                        onClick={() => setShowAll(true)}
                    >
                        All
                    </button>
                    <button
                        className={`px-6 py-2 text-lg text-white ${showAll ? "" : "shadow-lg font-semibold"
                            }`}
                        onClick={() => setShowAll(false)}
                    >
                        Joined
                    </button>
                </div>}
        </div>

    )
}

export default TopComponent