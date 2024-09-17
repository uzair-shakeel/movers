import React, { useEffect, useState } from "react";
import { FaArrowLeftLong } from "react-icons/fa6";
import { useNavigate } from "react-router-dom";
import Hero from "../components/hero";
import toast from "react-hot-toast";

const Blog = () => {
  const navigate = useNavigate();

  // State variables for service and loading types
  const [serviceType, setServiceType] = useState("Movers Only");
  const [loadingType, setLoadingType] = useState("Loading");

  const [loadingDate, setLoadingDate] = useState("");
  const [unloadingDate, setUnloadingDate] = useState("");
  const [loadingZip, setLoadingZip] = useState("");
  const [unloadingZip, setUnloadingZip] = useState("");

  const handleNavigation = () => {
    localStorage.setItem("service", JSON.stringify(serviceType));
    localStorage.setItem("tab", JSON.stringify(loadingType));
    if (serviceType === "Movers Only") {
      navigate("/questions");
    } else {
      navigate("/initialQuestions");
    }

    // navigate("/questions", { state: selectedService });
  };
  useEffect(() => {
    window.scrollTo(0, 0); // Scrolls to the top of the page when the component mounts
  }, []);

  const isFormValid = () => {
    if (serviceType === "Movers Only") {
      if (loadingType === "Loading" && loadingZip && loadingDate) return true;
      if (loadingType === "Unloading" && unloadingZip && unloadingDate)
        return true;
      if (
        loadingType === "Both" &&
        loadingZip &&
        loadingDate &&
        unloadingZip &&
        unloadingDate
      )
        return true;
    } else {
      return loadingZip && loadingDate && unloadingZip;
    }
    return false;
  };

  return (
    <div>
      <div className="h-[500px] relative w-full bg-black overflow-hidden">
        <img
          src="/blog-title.png"
          alt=""
          className="w-full h-full object-cover"
        />
        <button
          onClick={() => navigate("/")}
          className="absolute flex gap-2 items-center top-5 left-5 px-3 py-1 rounded-full border-[1.7px] border-black font-bold bg-black/10 backdrop-blur-md "
        >
          <FaArrowLeftLong /> Go Back
        </button>
      </div>
      <div className="flex flex-col md:flex-row h-auto md:h-[100px] sticky top-0 px-4 md:px-8 justify-between items-start md:items-center w-full bg-blue-100">
        <h1 className="text-xl md:text-2xl w-full md:w-1/6 mb-4 md:mb-0">
          Select a Service
        </h1>

        <div className="w-full md:w-4/6 flex flex-col md:flex-row">
          {/* Service Type Dropdown */}
          <select
            className="border rounded-md p-3 mb-4 md:mb-0 mr-0 md:mr-4 w-full md:w-full focus:outline-none"
            value={serviceType}
            onChange={(e) => setServiceType(e.target.value)}
          >
            <option value="Movers Only">Movers Only</option>
            <option value="Movers + Truck">Movers + Truck</option>
          </select>

          {/* Loading/Unloading Dropdown (Only for Movers Only) */}
          {serviceType === "Movers Only" && (
            <select
              className="border rounded-md p-3 mb-4 md:mb-0 mr-0 md:mr-4 w-full focus:outline-none"
              value={loadingType}
              onChange={(e) => setLoadingType(e.target.value)}
            >
              <option value="Loading">Loading</option>
              <option value="Unloading">Unloading</option>
              <option value="Both">Loading + Unloading</option>
            </select>
          )}

          {/* Conditional Inputs for "Movers Only" */}
          {serviceType === "Movers Only" && loadingType === "Loading" && (
            <>
              <input
                type="date"
                className="border rounded-md p-3 mb-4 md:mb-0 mr-0 md:mr-4 w-full focus:outline-none"
                value={loadingDate}
                onChange={(e) => setLoadingDate(e.target.value)}
                placeholder="Loading Date"
              />
              <input
                type="text"
                className="border rounded-md p-3 w-full focus:outline-none"
                value={loadingZip}
                onChange={(e) => setLoadingZip(e.target.value)}
                placeholder="Loading ZIP Code"
              />
            </>
          )}

          {serviceType === "Movers Only" && loadingType === "Unloading" && (
            <>
              <input
                type="date"
                className="border rounded-md p-3 mb-4 md:mb-0 mr-0 md:mr-4 w-full focus:outline-none"
                value={unloadingDate}
                onChange={(e) => setUnloadingDate(e.target.value)}
                placeholder="Unloading Date"
              />
              <input
                type="text"
                className="border rounded-md p-3 w-full focus:outline-none"
                value={unloadingZip}
                onChange={(e) => setUnloadingZip(e.target.value)}
                placeholder="Unloading ZIP Code"
              />
            </>
          )}

          {serviceType === "Movers Only" && loadingType === "Both" && (
            <>
              <input
                type="date"
                className="border rounded-md p-3 mb-4 md:mb-0 mr-0 md:mr-4 w-full focus:outline-none"
                value={loadingDate}
                onChange={(e) => setLoadingDate(e.target.value)}
                placeholder="Loading Date"
              />
              <input
                type="text"
                className="border rounded-md p-3 mb-4 md:mb-0 mr-0 md:mr-4 w-full focus:outline-none"
                value={loadingZip}
                onChange={(e) => setLoadingZip(e.target.value)}
                placeholder="Loading ZIP Code"
              />
              <input
                type="date"
                className="border rounded-md p-3 mb-4 md:mb-0 mr-0 md:mr-4 w-full focus:outline-none"
                value={unloadingDate}
                onChange={(e) => setUnloadingDate(e.target.value)}
                placeholder="Unloading Date"
              />
              <input
                type="text"
                className="border rounded-md p-3 w-full focus:outline-none"
                value={unloadingZip}
                onChange={(e) => setUnloadingZip(e.target.value)}
                placeholder="Unloading ZIP Code"
              />
            </>
          )}

          {/* Conditional Inputs for "Movers + Truck" */}
          {serviceType === "Movers + Truck" && (
            <>
              <input
                type="date"
                className="border rounded-md p-3 mb-4 md:mb-0 mr-0 md:mr-4 w-full focus:outline-none"
                value={loadingDate}
                onChange={(e) => setLoadingDate(e.target.value)}
                placeholder="Date"
              />
              <input
                type="text"
                className="border rounded-md p-3 mb-4 md:mb-0 mr-0 md:mr-4 w-full focus:outline-none"
                value={loadingZip}
                onChange={(e) => setLoadingZip(e.target.value)}
                placeholder="Loading ZIP Code"
              />
              <input
                type="text"
                className="border rounded-md p-3 w-full focus:outline-none"
                value={unloadingZip}
                onChange={(e) => setUnloadingZip(e.target.value)}
                placeholder="Unloading ZIP Code"
              />
            </>
          )}
        </div>

        {/* Button */}
        <button
          onClick={handleNavigation}
          className={`bg-blue-500 w-full md:w-1/6 mx-0 md:mx-4 text-white py-2 px-4 rounded-full ${
            !isFormValid() && "opacity-50 cursor-not-allowed"
          }`}
          disabled={!isFormValid()}
        >
          Find the right mover
        </button>
      </div>

      <div className="py-8 px-7 lg:px-12">
        <h1
          className="text-3xl font-[900] uppercase text-center py-12 md:w-3/4 mx-auto
      "
        >
          Tipps für den Umzug in eine Wohnung ohne Aufzug
        </h1>
        <p className="md:w-2/3 mx-auto mb-12 text-justify text-xl leading-8">
          Sie haben die perfekte Wohnung gefunden. Die Miete stimmt, die
          Nachbarschaft fühlt sich wie zu Hause an und die Aussicht ist mehr,
          als Sie sich wünschen können. Es gibt nur ein kleines Problem – keinen
          Aufzug. Der Umzug in eine Wohnung ohne Aufzug mag entmutigend klingen,
          aber keine Sorge, wir haben die besten Expertentipps, die Ihren Umzug
          ohne Aufzug zum Erfolg oder Misserfolg machen können, insbesondere
          wenn Sie alleine sind.
        </p>
        <div className="md:w-2/3 mx-auto">
          <div className="h-[400px] w-full bg-black overflow-hidden">
            <img
              src="/blog-heading.jpg"
              alt=""
              className="w-full h-full object-cover"
            />
          </div>
          <h2
            className="text-2xl font-[900] uppercase text-center py-12 
      "
          >
            Planen Sie Ihren Umzug in eine Wohnung ohne Aufzug wie ein Profi
          </h2>
          <p className="md:w-2/3 mx-auto mb-12 text-justify text-lg leading-8">
            Ein solider Plan kann Ihnen buchstäblich jede Menge Ärger ersparen.
            Nehmen Sie sich Zeit, um den Umzug zu planen. Vertrauen Sie uns, es
            gibt nichts Schlimmeres, als wenn Ihr Sofa auf halber Treppe stecken
            bleibt.
          </p>

          <div>
            <h3
              className="text-2xl font-bold  text-center mb-4 
      "
            >
              Ihre Möbel abmessen{" "}
            </h3>
            <p className="md:w-2/3 mx-auto mb-12 text-justify text-lg leading-8">
              Erstellen Sie eine Liste aller großen Gegenstände, die Sie
              umziehen möchten. Messen Sie ihre Abmessungen, einschließlich
              Höhe, Breite und Tiefe. Vergessen Sie nicht, auch alle abnehmbaren
              Teile zu messen.
            </p>
            <h3
              className="text-2xl font-bold  text-center mb-4 
      "
            >
              Türöffnungen und Treppenhäuser abmessen
            </h3>
            <p className="md:w-2/3 mx-auto mb-12 text-justify text-lg leading-8">
              Gehen Sie mit einem Maßband zu Ihrem neuen Zuhause. Messen Sie die
              Breite und Höhe von Türöffnungen, die Breite von Fluren und die
              Abmessungen der Treppenhäuser, einschließlich aller Podeste oder
              Kurven.
            </p>
            <h3
              className="text-2xl font-bold  text-center mb-4 
      "
            >
              Die Maße vergleichen{" "}
            </h3>
            <p className="md:w-2/3 mx-auto mb-12 text-justify text-lg leading-8">
              Stellen Sie sicher, dass Ihre Möbel durch alle diese Räume passen.
              Wenn etwas zu eng erscheint, versuchen Sie, es nach Möglichkeit
              auseinanderzunehmen. Wenn Sie beispielsweise die Beine von einem
              Tisch oder Bettrahmen abnehmen, kann das einen großen Unterschied
              machen.{" "}
            </p>
          </div>
        </div>
      </div>
      <Hero heading=" " para=" " />
      <div className="py-8 px-7 lg:px-12">
        <h1
          className="text-3xl font-[900] uppercase text-center py-12 md:w-3/4 mx-auto
      "
        >
          Tipps für den Umzug in eine Wohnung ohne Aufzug
        </h1>
        <p className="md:w-2/3 mx-auto mb-12 text-justify text-xl leading-8">
          Sie haben die perfekte Wohnung gefunden. Die Miete stimmt, die
          Nachbarschaft fühlt sich wie zu Hause an und die Aussicht ist mehr,
          als Sie sich wünschen können. Es gibt nur ein kleines Problem – keinen
          Aufzug. Der Umzug in eine Wohnung ohne Aufzug mag entmutigend klingen,
          aber keine Sorge, wir haben die besten Expertentipps, die Ihren Umzug
          ohne Aufzug zum Erfolg oder Misserfolg machen können, insbesondere
          wenn Sie alleine sind.
        </p>
        <div className="md:w-2/3 mx-auto">
          <div className="h-[400px] w-full bg-black overflow-hidden">
            <img
              src="/blog-heading2.png"
              alt=""
              className="w-full h-full object-cover"
            />
          </div>
          <h2
            className="text-2xl font-[900] uppercase text-center py-12 
      "
          >
            Planen Sie Ihren Umzug in eine Wohnung ohne Aufzug wie ein Profi
          </h2>
          <p className="md:w-2/3 mx-auto mb-12 text-justify text-lg leading-8">
            Ein solider Plan kann Ihnen buchstäblich jede Menge Ärger ersparen.
            Nehmen Sie sich Zeit, um den Umzug zu planen. Vertrauen Sie uns, es
            gibt nichts Schlimmeres, als wenn Ihr Sofa auf halber Treppe stecken
            bleibt.
          </p>
          <div>
            <h3
              className="text-2xl font-bold  text-center mb-4 
      "
            >
              Ihre Möbel abmessen{" "}
            </h3>
            <p className="md:w-2/3 mx-auto mb-12 text-justify text-lg leading-8">
              Erstellen Sie eine Liste aller großen Gegenstände, die Sie
              umziehen möchten. Messen Sie ihre Abmessungen, einschließlich
              Höhe, Breite und Tiefe. Vergessen Sie nicht, auch alle abnehmbaren
              Teile zu messen.
            </p>
            <h3
              className="text-2xl font-bold  text-center mb-4 
      "
            >
              Türöffnungen und Treppenhäuser abmessen
            </h3>
            <p className="md:w-2/3 mx-auto mb-12 text-justify text-lg leading-8">
              Gehen Sie mit einem Maßband zu Ihrem neuen Zuhause. Messen Sie die
              Breite und Höhe von Türöffnungen, die Breite von Fluren und die
              Abmessungen der Treppenhäuser, einschließlich aller Podeste oder
              Kurven.
            </p>
            <h3
              className="text-2xl font-bold  text-center mb-4 
      "
            >
              Die Maße vergleichen{" "}
            </h3>
            <p className="md:w-2/3 mx-auto mb-12 text-justify text-lg leading-8">
              Stellen Sie sicher, dass Ihre Möbel durch alle diese Räume passen.
              Wenn etwas zu eng erscheint, versuchen Sie, es nach Möglichkeit
              auseinanderzunehmen. Wenn Sie beispielsweise die Beine von einem
              Tisch oder Bettrahmen abnehmen, kann das einen großen Unterschied
              machen.{" "}
            </p>
          </div>
        </div>
      </div>
      <div className="py-8 px-7 lg:px-12">
        <h1
          className="text-3xl font-[900] uppercase text-center py-12 md:w-3/4 mx-auto
      "
        >
          Tipps für den Umzug in eine Wohnung ohne Aufzug
        </h1>
        <p className="md:w-2/3 mx-auto mb-12 text-justify text-xl leading-8">
          Sie haben die perfekte Wohnung gefunden. Die Miete stimmt, die
          Nachbarschaft fühlt sich wie zu Hause an und die Aussicht ist mehr,
          als Sie sich wünschen können. Es gibt nur ein kleines Problem – keinen
          Aufzug. Der Umzug in eine Wohnung ohne Aufzug mag entmutigend klingen,
          aber keine Sorge, wir haben die besten Expertentipps, die Ihren Umzug
          ohne Aufzug zum Erfolg oder Misserfolg machen können, insbesondere
          wenn Sie alleine sind.
        </p>
        <div className="md:w-2/3 mx-auto">
          <div className="h-[400px] w-full bg-black overflow-hidden">
            <img
              src="/blog-heading3.png"
              alt=""
              className="w-full h-full object-cover"
            />
          </div>
          <h2
            className="text-2xl font-[900] uppercase text-center py-12 
      "
          >
            Planen Sie Ihren Umzug in eine Wohnung ohne Aufzug wie ein Profi
          </h2>
          <p className="md:w-2/3 mx-auto mb-12 text-justify text-lg leading-8">
            Ein solider Plan kann Ihnen buchstäblich jede Menge Ärger ersparen.
            Nehmen Sie sich Zeit, um den Umzug zu planen. Vertrauen Sie uns, es
            gibt nichts Schlimmeres, als wenn Ihr Sofa auf halber Treppe stecken
            bleibt.
          </p>
          <div>
            <h3
              className="text-2xl font-bold  text-center mb-4 
      "
            >
              Ihre Möbel abmessen{" "}
            </h3>
            <p className="md:w-2/3 mx-auto mb-12 text-justify text-lg leading-8">
              Erstellen Sie eine Liste aller großen Gegenstände, die Sie
              umziehen möchten. Messen Sie ihre Abmessungen, einschließlich
              Höhe, Breite und Tiefe. Vergessen Sie nicht, auch alle abnehmbaren
              Teile zu messen.
            </p>
            <h3
              className="text-2xl font-bold  text-center mb-4 
      "
            >
              Türöffnungen und Treppenhäuser abmessen
            </h3>
            <p className="md:w-2/3 mx-auto mb-12 text-justify text-lg leading-8">
              Gehen Sie mit einem Maßband zu Ihrem neuen Zuhause. Messen Sie die
              Breite und Höhe von Türöffnungen, die Breite von Fluren und die
              Abmessungen der Treppenhäuser, einschließlich aller Podeste oder
              Kurven.
            </p>
            <h3
              className="text-2xl font-bold  text-center mb-4 
      "
            >
              Die Maße vergleichen{" "}
            </h3>
            <p className="md:w-2/3 mx-auto mb-12 text-justify text-lg leading-8">
              Stellen Sie sicher, dass Ihre Möbel durch alle diese Räume passen.
              Wenn etwas zu eng erscheint, versuchen Sie, es nach Möglichkeit
              auseinanderzunehmen. Wenn Sie beispielsweise die Beine von einem
              Tisch oder Bettrahmen abnehmen, kann das einen großen Unterschied
              machen.{" "}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Blog;
