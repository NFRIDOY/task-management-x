import Banner from "../../components/Banner/Banner";


export default function Home() {

    return (
        <div>
            <Banner></Banner>
            <div className="mx-auto my-10">
                <h1 className="text-5xl my-10">Besic Qustions</h1>
                <div className="collapse bg-base-200">
                    <input type="radio" name="my-accordion-1" checked="checked" />
                    <div className="collapse-title text-xl font-medium">
                        Who Will Use This?
                    </div>
                    <div className="collapse-content">
                        <p>Individual Users can use this</p>
                    </div>
                </div>
                <div className="collapse bg-base-200">
                    <input type="radio" name="my-accordion-1" />
                    <div className="collapse-title text-xl font-medium">
                        Why should you use this?
                    </div>
                    <div className="collapse-content">
                        <p>This is a Task Management. I you want to be an organaized person you should try this</p>
                    </div>
                </div>
                <div className="collapse bg-base-200">
                    <input type="radio" name="my-accordion-1" />
                    <div className="collapse-title text-xl font-medium">
                        Only Individual Users can use this?
                    </div>
                    <div className="collapse-content">
                        <p>Yes. This is our first version. In future we will bring office version where a boss can add task for employees</p>
                    </div>
                </div>
                {/* <h1 className="text">

                </h1> */}
            </div>
        </div>
    )
}
