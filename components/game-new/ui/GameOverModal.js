import { UiModal } from "../../uikit/UiModal";
import { UiButton } from "../../uikit/UiButton";

export function GameOverModal() {
  return (
    <UiModal width="md" isOpen={winnerSymbol} onClose={() => {}}>
      <UiModal.Header>Игра завершена!</UiModal.Header>
      <UiModal.Body>
        <div className="text-sm">
          Победитель: <span className="text-teal-600">Ivan</span>
        </div>
      </UiModal.Body>
      <UiModal.Footer>
        <UiButton size="md" variant="outline">
          Вернуться
        </UiButton>
        <UiButton size="md" variant="primary">
          Играть снова
        </UiButton>
      </UiModal.Footer>
    </UiModal>
  );
}
