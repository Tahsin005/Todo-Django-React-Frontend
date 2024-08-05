import { MdDeleteForever } from "react-icons/md";
import { FaEdit } from "react-icons/fa";
import { RiCheckboxBlankLine } from "react-icons/ri";
const Table = () => {
    return (
        <div className="">
            <div className="py-12">
                <table className="w-11/12 max-w-4xl">
                    <thead className="border-b-2 border-black">
                        <tr>
                            <th className="p-3 text-sm font-semibold tracking-wide text-left">Checkbox</th>
                            <th className="p-3 text-sm font-semibold tracking-wide text-left">To Do</th>
                            <th className="p-3 text-sm font-semibold tracking-wide text-left">Status</th>
                            <th className="p-3 text-sm font-semibold tracking-wide text-left">Created</th>
                            <th className="p-3 text-sm font-semibold tracking-wide text-left">Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr className="border-b-[1px] border-dashed border-black">
                            <td className="p-3 ">
                                <span><RiCheckboxBlankLine className="text-lg hover:cursor-pointer"></RiCheckboxBlankLine></span>
                            </td>
                            <td className="p-3 text-sm ">Todooo</td>
                            <td className="p-3 text-sm text-center">
                                <span className="p-1.5 text-xs font-medium tracking-wide rounded-md bg-green-400">Done</span>
                            </td>
                            <td className="p-3 text-sm ">36/7/2024</td>
                            <td className="p-3 text-sm flex justify-start gap-x-8">
                                <FaEdit className="text-lg hover:cursor-pointer"></FaEdit>
                                <MdDeleteForever className="text-lg hover:cursor-pointer"></MdDeleteForever>
                            </td>
                        </tr>
                        <tr className="border-b-[1px] border-dashed border-black">
                            <td className="p-3 ">
                                <span><RiCheckboxBlankLine className="text-lg hover:cursor-pointer"></RiCheckboxBlankLine></span>
                            </td>
                            <td className="p-3 text-sm ">Todooo</td>
                            <td className="p-3 text-sm text-center">
                                <span className="p-1.5 text-xs font-medium tracking-wide rounded-md bg-green-400">Done</span>
                            </td>
                            <td className="p-3 text-sm ">36/7/2024</td>
                            <td className="p-3 text-sm flex justify-start gap-x-8">
                                <FaEdit className="text-lg hover:cursor-pointer"></FaEdit>
                                <MdDeleteForever className="text-lg hover:cursor-pointer"></MdDeleteForever>
                            </td>
                        </tr>
                        <tr className="border-b-[1px] border-dashed border-black">
                            <td className="p-3 ">
                                <span><RiCheckboxBlankLine className="text-lg hover:cursor-pointer"></RiCheckboxBlankLine></span>
                            </td>
                            <td className="p-3 text-sm ">Todooo</td>
                            <td className="p-3 text-sm text-center">
                                <span className="p-1.5 text-xs font-medium tracking-wide rounded-md bg-green-400">Done</span>
                            </td>
                            <td className="p-3 text-sm ">36/7/2024</td>
                            <td className="p-3 text-sm flex justify-start gap-x-8">
                                <FaEdit className="text-lg hover:cursor-pointer"></FaEdit>
                                <MdDeleteForever className="text-lg hover:cursor-pointer"></MdDeleteForever>
                            </td>
                        </tr>
                        <tr className="border-b-[1px] border-dashed border-black">
                            <td className="p-3 ">
                                <span><RiCheckboxBlankLine className="text-lg hover:cursor-pointer"></RiCheckboxBlankLine></span>
                            </td>
                            <td className="p-3 text-sm ">Todooo</td>
                            <td className="p-3 text-sm text-center">
                                <span className="p-1.5 text-xs font-medium tracking-wide rounded-md bg-green-400">Done</span>
                            </td>
                            <td className="p-3 text-sm ">36/7/2024</td>
                            <td className="p-3 text-sm flex justify-start gap-x-8">
                                <FaEdit className="text-lg hover:cursor-pointer"></FaEdit>
                                <MdDeleteForever className="text-lg hover:cursor-pointer"></MdDeleteForever>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default Table;