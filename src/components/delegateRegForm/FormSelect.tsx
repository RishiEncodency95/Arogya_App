import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Modal, FlatList, SafeAreaView } from 'react-native';
import { ChevronDown, X } from 'lucide-react-native';

export interface FormSelectOption {
  label: string;
  value: string;
}

interface FormSelectProps {
  label: string;
  required?: boolean;
  placeholder: string;
  options: FormSelectOption[];
  value?: string;
  onSelect?: (value: string) => void;
  disabled?: boolean;
}

export const FormSelect: React.FC<FormSelectProps> = ({ 
  label, required, placeholder, options = [], value, onSelect, disabled 
}) => {
  const [modalVisible, setModalVisible] = useState(false);

  const selectedOption = options.find(o => o.value === value);
  const displayLabel = selectedOption ? selectedOption.label : placeholder;

  const handleSelect = (val: string) => {
    if (onSelect) onSelect(val);
    setModalVisible(false);
  };

  return (
    <View style={s.container}>
      <Text style={s.label}>
        {label} {required && <Text style={s.asterisk}>*</Text>}
      </Text>
      
      <TouchableOpacity 
        style={[s.selectBox, disabled && s.disabledBox]} 
        activeOpacity={0.8}
        onPress={() => !disabled && setModalVisible(true)}
      >
        <Text style={[s.placeholder, selectedOption && s.selectedText]} numberOfLines={1}>
          {displayLabel}
        </Text>
        <ChevronDown size={16} color="#6B7280" />
      </TouchableOpacity>

      <Modal visible={modalVisible} transparent animationType="fade">
        <View style={s.modalOverlay}>
          <View style={s.modalContent}>
            <View style={s.modalHeader}>
              <Text style={s.modalTitle}>Select {label}</Text>
              <TouchableOpacity onPress={() => setModalVisible(false)}>
                <X size={20} color="#6B7280" />
              </TouchableOpacity>
            </View>
            <FlatList
              data={options}
              keyExtractor={(item, index) => item.value + index}
              renderItem={({ item }) => (
                <TouchableOpacity 
                  style={[s.optionItem, value === item.value && s.selectedOptionItem]} 
                  onPress={() => handleSelect(item.value)}
                >
                  <Text style={[s.optionText, value === item.value && s.selectedOptionText]}>
                    {item.label}
                  </Text>
                </TouchableOpacity>
              )}
            />
          </View>
        </View>
      </Modal>
    </View>
  );
};

const s = StyleSheet.create({
  container: {
    marginBottom: 10,
  },
  label: {
    fontSize: 10,
    fontWeight: '700',
    color: '#111827',
    marginBottom: 4,
  },
  asterisk: {
    color: '#EF4444',
  },
  selectBox: {
    borderWidth: 1,
    borderColor: '#D1D5DB',
    borderRadius: 6,
    paddingHorizontal: 10,
    height: 34,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: '#FFF',
  },
  disabledBox: {
    backgroundColor: '#F3F4F6',
  },
  placeholder: {
    fontSize: 11,
    color: '#9CA3AF',
    flex: 1,
    marginRight: 8,
  },
  selectedText: {
    color: '#111',
  },
  modalOverlay: {
    flex: 1,
    backgroundColor: 'rgba(0,0,0,0.5)',
    justifyContent: 'flex-end',
  },
  modalContent: {
    backgroundColor: '#FFF',
    borderTopLeftRadius: 16,
    borderTopRightRadius: 16,
    maxHeight: '70%',
  },
  modalHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 16,
    borderBottomWidth: 1,
    borderBottomColor: '#F3F4F6',
  },
  modalTitle: {
    fontSize: 14,
    fontWeight: '700',
    color: '#111827',
  },
  optionItem: {
    paddingVertical: 14,
    paddingHorizontal: 16,
    borderBottomWidth: 1,
    borderBottomColor: '#F9FAFB',
  },
  selectedOptionItem: {
    backgroundColor: '#F0FDF4',
  },
  optionText: {
    fontSize: 13,
    color: '#374151',
  },
  selectedOptionText: {
    color: '#064E3B',
    fontWeight: '700',
  },
});
