import { byClass, byClassSimple, from } from '../lib/slfp';

const tag = document.createElement('a');
const setToTag = (name, email, tel, message) => {
  let aText = [
    message,
    '',
    'Телефон для связи: ' + tel,
    'Email для связи: ' + email,
    name,
  ];
  tag.setAttribute(
    'href',
    'mailto:info@mik2000.ru?subject=МИК2000 обратная связь&body=' +
      aText.join('%0D%0A'),
  );
};

const handleMailtoClick = (button, name, email, tel, message) => {
  return (event) => {
    setToTag(name.value, email.value, tel.value, message.value);
    tag.click();
  };
};

export default function () {
  from(byClass('mailto_form'), (MailtoForm) => {
    const MailtoButton = byClassSimple('mailto_button', MailtoForm);
    const MailtoName = byClassSimple('mailto_name', MailtoForm);
    const MailtoNameInput = byClassSimple('custom_fieldset_input', MailtoName);
    const MailtoEmail = byClassSimple('mailto_email', MailtoForm);
    const MailtoEmailInput = byClassSimple(
      'custom_fieldset_input',
      MailtoEmail,
    );
    const MailtoTel = byClassSimple('mailto_tel', MailtoForm);
    const MailtoTelInput = byClassSimple('custom_fieldset_input', MailtoTel);
    const MailtoMessage = byClassSimple('mailto_message', MailtoForm);
    const MailtoMessageInput = byClassSimple(
      'custom_fieldset_input',
      MailtoMessage,
    );
    const MailtoMessageTextArea = byClassSimple(
      'custom_textarea_input',
      MailtoMessage,
    );
    MailtoButton.addEventListener(
      'click',
      handleMailtoClick(
        MailtoButton,
        MailtoNameInput,
        MailtoEmailInput,
        MailtoTelInput,
        MailtoMessageInput.innerHTML !== undefined
          ? MailtoMessageInput
          : MailtoMessageTextArea,
      ),
    );
  });
}
