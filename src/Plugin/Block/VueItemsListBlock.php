<?php

namespace Drupal\vue_items_list\Plugin\Block;

use Drupal\Core\Block\BlockBase;
use Drupal\Core\Block\Attribute\Block;
use Drupal\Core\Form\FormStateInterface;
use Drupal\Core\StringTranslation\TranslatableMarkup;

/**
 * Provides a Vue Items List Block.
 */
#[Block(
  id: "vue_items_list",
  admin_label: new TranslatableMarkup("Vue Items List"),
  category: new TranslatableMarkup("Block")
)]
class VueItemsListBlock extends BlockBase {

  /**
   * {@inheritdoc}
   */
  public function build() {
    $config = $this->getConfiguration();
    $length = $config['items_length'] ?? 3;
    return [
      '#theme' => 'vue_items_list',
      '#custom_length' => $config['items_length'] ?? 3,
      '#attached' => [
        'library' => [
          'vue_items_list/vue_items_list',
        ],
      ],
    ];
  }

  /**
   * {@inheritdoc}
   */
  public function defaultConfiguration() {
    return [
      'items_length' => 3,
    ];
  }

  /**
   * {@inheritdoc}
   */
  public function blockForm($form, FormStateInterface $form_state) {
    $form['items_length'] = [
      '#type' => 'textfield',
      '#title' => $this->t('How many items should be fetched?'),
      '#description' => $this->t('Add number of items(1-99)'),
      '#default_value' => $this->configuration['items_length'],
    ];

    return $form;
  }

  /**
   * {@inheritdoc}
   */
  public function blockSubmit($form, FormStateInterface $form_state) {
    $values = $form_state->getValues();
    $this->configuration['items_length'] = $values['items_length'];
  }

  /**
   * {@inheritdoc}
   */
  public function blockValidate($form, FormStateInterface $form_state) {
    if ($form_state->getValue('items_length') < 1 || $form_state->getValue('items_length') > 100) {
      $form_state->setErrorByName('items_length', $this->t('Add number of items between 1 and 99'));
    }
  }
}
