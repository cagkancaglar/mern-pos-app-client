import { Button, Modal } from "antd";

const PrintInvoice = ({ isModalOpen, setIsModalOpen }) => {
  return (
    <Modal
      title="Print Invoice"
      open={isModalOpen}
      footer={false}
      onCancel={() => setIsModalOpen(false)}
      width={800}
    >
      <section className="py-20 bg-black">
        <div className="max-w-5xl mx-auto bg-white px-6">
          <article className="overflow-hidden">
            <div className="logo my-6">
              <h2 className="text-4xl font-bold text-slate-700 uppercase">
                logo
              </h2>
            </div>
            <div className="invoice-details grid grid-cols-3 sm:grid-cols-4 gap-12">
              <div className="text-sm text-slate-500">
                <p className="font-bold text-slate-700 capitalize">
                  invoice details
                </p>
                <p className="capitalize">unwrapped</p>
                <p className="capitalize">fake street 123</p>
                <p className="capitalize">san javier</p>
                <p className="uppercase">ca 1234</p>
              </div>
              <div className="text-sm text-slate-500">
                <p className="font-bold text-slate-700">Invioce</p>
                <p className="capitalize">the boring company</p>
                <p className="capitalize">tesla street</p>
                <p className="capitalize">frisco</p>
                <p className="capitalize">007</p>
              </div>
              <div className="text-sm text-slate-500">
                <p className="font-bold text-slate-700 capitalize">
                  invoice number
                </p>
                <p className="capitalize">00041</p>
                <p className="capitalize text-slate-700 font-bold mt-3">
                  date of issue
                </p>
                <p className="uppercase">5.07.2023</p>
              </div>
              <div className="text-sm text-slate-500">
                <p className="font-bold text-slate-700 capitalize">terms</p>
                <p className="capitalize">10 day</p>
                <p className="font-bold text-slate-700 mt-3 capitalize sm:block hidden">
                  due
                </p>
                <p className="capitalize">14.07.2023</p>
              </div>
            </div>
            <div className="invoice-table-area mt-8">
              <table className="min-w-full divide-y divide-slate-500 overflow-hidden">
                <thead>
                  <tr className="border-b border-slate-200">
                    <th
                      scope="col"
                      className="capitalize py-3.5 text-left text-sm font-normal text-slate-700 sm:table-cell hidden"
                    >
                      image
                    </th>
                    <th
                      scope="col"
                      className="capitalize py-3.5 text-left text-sm font-normal text-slate-700 sm:table-cell hidden"
                    >
                      title
                    </th>
                    <th
                      colSpan={4}
                      scope="col"
                      className="capitalize py-3.5 text-left text-sm font-normal text-slate-700 sm:hidden"
                    >
                      title
                    </th>
                    <th
                      scope="col"
                      className="capitalize py-3.5 text-center text-sm font-normal text-slate-700 sm:table-cell hidden"
                    >
                      price
                    </th>
                    <th
                      scope="col"
                      className="capitalize py-3.5 text-center text-sm font-normal text-slate-700 sm:table-cell hidden"
                    >
                      quantity
                    </th>
                    <th
                      scope="col"
                      className="capitalize py-3.5 text-end text-sm font-normal text-slate-700"
                    >
                      total
                    </th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-b border-slate-200">
                    <td className="py-4 hidden sm:table-cell">
                      <img
                        src="https://picsum.photos/2000"
                        alt=""
                        className="w-16 h-16 object-cover"
                      />
                    </td>
                    <td className="py-4 sm:table-cell hidden">
                      <div className="flex flex-col">
                        <span className="capitalize font-medium">cola</span>
                        <span className="lowercase font-xs sm:hidden inline-block">
                          2 unit at 5 ${" "}
                        </span>
                      </div>
                    </td>
                    <td className="py-4 sm:hidden" colSpan={4}>
                      <div className="flex flex-col">
                        <span className="capitalize font-medium">cola</span>
                        <span className="lowercase font-xs sm:hidden inline-block">
                          2 unit at 5 ${" "}
                        </span>
                      </div>
                    </td>
                    <td className="py-4 text-center hidden sm:table-cell">
                      <span className="font-medium">5 $</span>
                    </td>
                    <td className="py-4 text-center hidden sm:table-cell">
                      <span className="font-medium">2</span>
                    </td>
                    <td className="py-4 text-end">
                      <span className="font-medium">10 $</span>
                    </td>
                  </tr>
                </tbody>
                <tfoot>
                  <tr>
                    <th
                      className="capitalize text-right pt-4 sm:table-cell hidden"
                      colSpan={4}
                      scope="row"
                    >
                      <span className="font-normal text-slate-700">
                        subtotal
                      </span>
                    </th>
                    <th
                      className="capitalize text-left pt-4 sm:hidden"
                      colSpan={4}
                      scope="row"
                    >
                      <span className="font-normal text-slate-700">
                        subtotal
                      </span>
                    </th>
                    <th
                      className="uppercase text-right pt-4"
                      colSpan={4}
                      scope="row"
                    >
                      <span className="font-normal text-slate-700">10 $</span>
                    </th>
                  </tr>
                  <tr>
                    <th
                      className="uppercase text-right pt-4 sm:table-cell hidden"
                      colSpan={4}
                      scope="row"
                    >
                      <span className="font-normal text-slate-700">kdv</span>
                    </th>
                    <th
                      className="uppercase text-left pt-4 sm:hidden"
                      colSpan={4}
                      scope="row"
                    >
                      <span className="font-normal text-slate-700">kdv</span>
                    </th>
                    <th
                      className="uppercase text-right pt-4"
                      colSpan={4}
                      scope="row"
                    >
                      <span className="font-normal text-red-700">1.18 $</span>
                    </th>
                  </tr>
                  <tr>
                    <th
                      className="uppercase text-right pt-4 sm:table-cell hidden"
                      colSpan={4}
                      scope="row"
                    >
                      <span className="font-bold text-slate-700">total</span>
                    </th>
                    <th
                      className="uppercase text-left pt-4 sm:hidden"
                      colSpan={4}
                      scope="row"
                    >
                      <span className="font-bold text-slate-700">total</span>
                    </th>
                    <th
                      className="uppercase text-right pt-4"
                      colSpan={4}
                      scope="row"
                    >
                      <span className="font-bold text-slate-700">10 $</span>
                    </th>
                  </tr>
                </tfoot>
              </table>
              <div className="py-9">
                <div className="pt-9 border-t border-slate-200">
                  <p className="text-sm font-light text-slate-700">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Saepe asperiores beatae aspernatur quia architecto, tempore
                    earum illo ea modi, obcaecati, praesentium quasi nihil
                    quisquam. Blanditiis culpa voluptatem eveniet quis, dolores
                    ipsum similique beatae aspernatur voluptates, possimus
                    autem. Quibusdam deserunt eligendi maxime totam dolorum.
                    Minima sapiente natus fuga ducimus officiis ratione.
                  </p>
                </div>
              </div>
            </div>
          </article>
        </div>
      </section>
      <div className="flex justify-end mt-4">
        <Button type="primary" size="large">
          Print
        </Button>
      </div>
    </Modal>
  );
};

export default PrintInvoice;
