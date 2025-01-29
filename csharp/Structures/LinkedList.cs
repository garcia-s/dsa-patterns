namespace Structures
{

    class LinkedList<T>
    {
        private Node? _head;
        private Node? _tail;
        private int _len = 0;
        public int Len
        {
            get => _len;
        }



        public void Append(T data)
        {
            var node = new Node(data);
            if (_head == null)
            {
                _head = node;
                _tail = node;
                _len++;
                return;
            }

            _tail!.next = node;
            _tail = node;
            _len++;
        }

        public void Prepend(T data)
        {
            var node = new Node(data);
            if (_head == null)
            {
                _head = node;
                _tail = node;
                _len++;
                return;
            }
            node.next = _head!;
            _head = node;
            _len++;
        }

        public T? Pop()
        {

            if (_len == 0)
            {
                return default;
            }


            var second = _head;
            if (_len == 1)
            {
                _len--;
                _head = null;
                _tail = null;
                return second!.data;
            }

            for (int i = 0; i < _len - 2; i++)
            {
                second = second!.next;
            }
            var val = second!.next!.data;
            second.next = null;
            _tail = second;
            return val;

        }


        private class Node
        {
            //Classes are reference types in C# so we "store" the next but it's actually just a reference 
            public Node? next;
            public T data;

            public Node(T a) => data = a;
        }

    };

}
