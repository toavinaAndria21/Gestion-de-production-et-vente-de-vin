import Ingredients from "../pages/productor/ingredients";
import Steps from "../pages/productor/steps";
import Vintage from "../pages/productor/vintage";
import Bottling from "../pages/productor/bottling";

const productorRoute = [
  {
    path: '/productor/ingredients',
    element: <Ingredients />
  },
  {
    path: '/productor/steps',
    element: <Steps />
  },
  {
    path: '/productor/vintage',
    element: <Vintage />
  },
  {
    path: '/productor/bottling',
    element: <Bottling />
  },
];

export default productorRoute;