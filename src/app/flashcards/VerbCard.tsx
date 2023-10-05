import React from "react";

function VerbCard() {
  return (
    <div className="w-1/4 h-2/4 border-2	rounded-lg outline outline-offset-2 outline-4 outline-black-500">
{/*       <div className="flex">
        <div className="flex">
          <img src={"https://media.istockphoto.com/id/157645790/photo/sport-woman-drinking-water-xlarge.webp?b=1&s=170667a&w=0&k=20&c=rUJqT0D9BU_FyJr3S0iD0lRt5Ou7rY-BH8D4r9qD9fk="} className="w-32 h-32 overflow-hidden" />
        </div>
        <div className="flex">
          <table className="table-auto border-separate border-spacing-2">
            <tr>
              <td className="border border-slate-600">Tamil</td>
              <td className="border border-slate-600">குடித்தல்</td>
            </tr>
            <tr>
              <td className="border border-slate-700">English</td>
              <td className="border border-slate-700">to drink</td>
            </tr>
            <tr>
              <td className="border border-slate-700">German</td>
              <td className="border border-slate-700">trinken</td>
            </tr>
          </table>
        </div>
      </div> */}
      <div>
        <table className="table-auto border-separate border-spacing-2 w-full">
          <tr>
            <td className="border border-slate-600">Ich</td>
            <td className="border border-slate-600">trinke</td>
            {/* <td className="border border-slate-600">I</td>
            <td className="border border-slate-600">drink</td> */}
            <td className="border border-slate-600">நான்</td>
            <td className="border border-slate-600">குடிப்பேன்</td>
          </tr>
          <tr>
            <td className="border border-slate-600">Du(informal)</td>
            <td className="border border-slate-600">trinkst</td>
            {/* <td className="border border-slate-600">You(singular)</td>
            <td className="border border-slate-600">drink</td> */}
            <td className="border border-slate-600">நீ</td>
            <td className="border border-slate-600">குடிப்பாய்</td>
          </tr>
          <tr>
            <td className="border border-slate-600">Er <br></br>Sie<br></br>Es</td>
            <td className="border border-slate-600">trinkt</td>
            {/* <td className="border border-slate-600">He<br></br>She<br></br>It</td>
            <td className="border border-slate-600">drinks</td> */}
            <td className="border border-slate-600">அவன்<br></br>அவள்<br></br>அது</td>
            <td className="border border-slate-600">குடிப்பான்<br></br>குடிப்பாள்<br></br>குடிக்கும்</td>
          </tr>
          <tr>
            <td className="border border-slate-600">Wir</td>
            <td className="border border-slate-600">trinken</td>
            {/* <td className="border border-slate-600">We</td>
            <td className="border border-slate-600">drink</td> */}
            <td className="border border-slate-600">நாம்</td>
            <td className="border border-slate-600">குடிப்போம்</td>
          </tr>
          <tr>
            <td className="border border-slate-600">Ihr(informal)</td>
            <td className="border border-slate-600">trinkt</td>
            {/* <td className="border border-slate-600">You(plural)</td>
            <td className="border border-slate-600">drink</td> */}
            <td className="border border-slate-600">நீங்கள்</td>
            <td className="border border-slate-600">குடிப்பீர்கள்</td>
          </tr>
          <tr>
            <td className="border border-slate-600">sie<br></br>Sie(formal)</td>
            <td className="border border-slate-600">trinken</td>
            {/* <td className="border border-slate-600">They<br></br>You(Singular)</td>
            <td className="border border-slate-600">drink</td> */}
            <td className="border border-slate-600">அவர்கள்<br></br>நீங்கள்</td>
            <td className="border border-slate-600">குடிப்பார்கள்<br></br>குடிப்பீர்கள்</td>
          </tr>
        </table>
      </div>
    </div>
  );
}

export default VerbCard;
