import { GoPlus } from "react-icons/go";
import { MdRefresh } from "react-icons/md";
import { LuPenLine } from "react-icons/lu";
import { ProductData } from "../utils/constants";

const Products = () => {
  return (
    <div className="text-xl">
      <div>
        <div className="flex justify-end my-2">
          <button className="flex p-2 items-center bg-red-600 text-white font-lg rounded-sm mr-2">
            <MdRefresh size={25} className="mr-2" />
            Refresh
          </button>
          <button className="flex p-2 items-center bg-red-600 text-white font-lg rounded-sm">
            <GoPlus size={25} className="mr-2" />
            Add Product
          </button>
        </div>
      </div>
      <div className="relative overflow-x-auto">
        <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
          <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
            <tr>
              <th scope="col" className="px-6 py-3">
                Image
              </th>
              <th scope="col" className="px-6 py-3">
                Name
              </th>
              <th scope="col" className="px-6 py-3">
                Category
              </th>
              <th scope="col" className="px-6 py-3">
                Commission Type
              </th>
              <th scope="col" className="px-6 py-3">
                Commission Value
              </th>
              <th scope="col" className="px-6 py-3">
                Label Tag
              </th>
              <th scope="col" className="px-6 py-3">
                Status
              </th>
              <th scope="col" className="px-6 py-3">
                Actions
              </th>
            </tr>
          </thead>
          <tbody>
          {ProductData.map((product) => {
                return (
                    <tr key={product.id} className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 border-gray-200">
                    <th
                      scope="row"
                      className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                    >
                      <img src={product.imgUrl} className="w-15" alt="img" />
                    </th>
                    <td className="px-6 py-4">{product.name}</td>
                    <td className="px-6 py-4">{product.category}</td>
                    <td className="px-6 py-4">{product.commission_type}</td>
                    <td className="px-6 py-4">{product.commission_value}</td>
                    <td className="px-6 py-4">{product.label_tag}</td>
                    <td className="px-6 py-4">{product.status}</td>
                    <td className="px-6 py-4">
                      <LuPenLine />
                    </td>
                  </tr>
                );
              })}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Products;
