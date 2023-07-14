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
            <div className="invoice-details grid grid-cols-4 gap-12">
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
                <p className="capitalize">fake street 123</p>
                <p className="capitalize text-slate-700 font-bold mt-3">
                  date of issue
                </p>
                <p className="uppercase">ca 1234</p>
              </div>
              <div className="text-sm text-slate-500">
                <p className="font-bold text-slate-700 capitalize">terms</p>
                <p className="capitalize">fake street 123</p>
                <p className="font-bold text-slate-700 mt-3 capitalize">due</p>
                <p className="capitalize">00.00.00</p>
              </div>
            </div>
            <div className="invoice-table-area mt-8">
              <table className="min-w-full divide-y divide-slate-500 overflow-hidden">
                <thead>
                  <tr className="border-b border-slate-200">
                    <th
                      scope="col"
                      className="capitalize py-3.5 pl-4 text-left text-sm font-normal text-slate-700 sm:pl-0 sm:table-cell hidden"
                    >
                      image
                    </th>
                    <th
                      scope="col"
                      className="capitalize py-3.5 pl-4 text-left text-sm font-normal text-slate-700 sm:pl-0 sm:table-cell hidden"
                    >
                      title
                    </th>
                    <th
                      scope="col"
                      className="capitalize py-3.5 pl-4 text-center text-sm font-normal text-slate-700 sm:pl-0 sm:table-cell hidden"
                    >
                      price
                    </th>
                    <th
                      scope="col"
                      className="capitalize py-3.5 pl-4 text-center text-sm font-normal text-slate-700 sm:pl-0 sm:table-cell hidden"
                    >
                      quantity
                    </th>
                    <th
                      scope="col"
                      className="capitalize py-3.5 pl-4 text-end text-sm font-normal text-slate-700 sm:pl-0 sm:table-cell hidden"
                    >
                      total
                    </th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-b border-slate-200">
                    <td className="py-4">
                      <img
                        src="https://picsum.photos/2000"
                        alt=""
                        className="w-16 h-16 object-cover"
                      />
                    </td>
                    <td className="py-4">
                      <span className="capitalize font-medium">şalgam</span>
                    </td>
                    <td className="py-4 text-center">
                      <span className="font-medium">5 $</span>
                    </td>
                    <td className="py-4 text-center">
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
                      className="capitalize text-right pt-6"
                      colSpan={4}
                      scope="row"
                    >
                      <span className="font-normal text-slate-700">
                        subtotal
                      </span>
                    </th>
                    <th
                      className="uppercase text-right pt-6"
                      colSpan={4}
                      scope="row"
                    >
                      <span className="font-normal text-slate-700">10 $</span>
                    </th>
                  </tr>
                  <tr>
                    <th
                      className="uppercase text-right pt-4"
                      colSpan={4}
                      scope="row"
                    >
                      <span className="font-normal text-red-700">kdv</span>
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
                      className="uppercase text-right pt-4"
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
